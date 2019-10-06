/* eslint-disable react/no-danger */
import React, { Fragment } from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
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

export default ({ data }) => {
  const {
    dataJson: { work, likes },
  } = data;
  return (
    <Layout>
      <Grid>
        <Row>
          <Col xs={12} as="section">
            <h2>Senior Software Engineer</h2>

            <p>
              <a href="https://github.com/omonk" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                <FaGithub /> Github Profile
              </a>
            </p>
          </Col>
          <Col xs={12} sm={6} as="section">
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
          <Col xs={12} sm={6} as="section">
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
