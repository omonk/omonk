/* eslint-disable react/no-danger */
import React, { Fragment } from 'react';
import Image from 'gatsby-image';
import remcalc from 'remcalc';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { FaGithub } from 'react-icons/fa';

const WorkWrapper = styled.div`
  h3,
  h4 {
    margin-bottom: 0.75rem;
    margin-top: 0;
  }
`;

const WorkExperience = ({ companyName, companyUrl, position, date, description }) => (
  <WorkWrapper>
    <h3>
      {companyUrl ? (
        <a href={companyUrl} target="_blank" rel="noopener noreferrer">
          {companyName}
        </a>
      ) : (
        companyName
      )}
    </h3>
    <h4>{position}</h4>
    <p>
      <small>{date}</small>
    </p>

    {description && <p dangerouslySetInnerHTML={{ __html: description }} />}
  </WorkWrapper>
);

const ProfileImageWrapper = styled.div`
  border-radius: 50%;
  overflow: hidden;

  ${breakpoint('sm')`
    margin-bottom: ${remcalc(20)}
  `}
`;

const ProfileRow = styled(Row)`
  margin-bottom: ${remcalc(30)};

  h2,
  p {
    margin-bottom: ${remcalc(15)};
  }
`;

export default ({ data }) => {
  const {
    dataJson: { work, likes },
    profile: { childImageSharp: profile },
  } = data;

  return (
    <Layout>
      <Grid>
        <ProfileRow middle="xs" as="section" aria-label="Profile">
          <Col xs={5}>
            <ProfileImageWrapper>
              <Image fluid={profile.fluid} />
            </ProfileImageWrapper>
          </Col>
          <Col xs={12}>
            <h2>Senior Software Engineer</h2>
            <p>
              <a href="https://github.com/omonk" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                <FaGithub /> Github
              </a>
            </p>
          </Col>
        </ProfileRow>
        <Row>
          <Col xs={12} sm={6} as="section" aria-label="Work Experience">
            <h2>Work</h2>

            {work &&
              work.length > 0 &&
              work.map((experience, idx, arr) => {
                const isLast = idx === arr.length - 1;
                return (
                  <Fragment key={work.companyName}>
                    <WorkExperience {...experience} />
                    {!isLast && <hr />}
                  </Fragment>
                );
              })}
          </Col>
          <Col xs={12} sm={6} as="section" aria-label="Interests">
            <h3>
              Things I{' '}
              <span role="img" aria-label="heart">
                ♥️
              </span>{' '}
              <br />
              <small>(in no specific order)</small>
            </h3>

            <ul>{likes && likes.length > 0 && likes.map(like => <li key={like}>{like}</li>)}</ul>
          </Col>
        </Row>
      </Grid>
    </Layout>
  );
};

export const pageQuery = graphql`
  {
    profile: file(relativePath: { eq: "profile.jpg" }) {
      publicURL
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dataJson {
      id
      work {
        companyName
        companyUrl
        position
        date
        description
      }
      likes
    }
  }
`;
