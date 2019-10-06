import React from 'react';
import Layout from '../components/Layout';
import remcalc from 'remcalc';
import { Link, graphql } from 'gatsby';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';

const PostTitle = styled.h3`
  margin-bottom: ${remcalc(15)};
`;

const Date = styled.small`
  display: inline-block;
  margin-bottom: ${remcalc(15)};
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 0;
  padding-bottom: 100%;
  margin-bottom: ${remcalc(20)};

  img {
    margin-bottom: 0;
    position: absolute;
    top: 0;
  }
`;

const BlogPreview = ({ frontmatter, excerpt }) => {
  const { path, title, date, image } = frontmatter;

  return (
    <>
      <Col xs={5} sm={3}>
        <ImageWrapper>
          <img src={image.publicURL} alt={`Preview graphic for ${title}`} />
        </ImageWrapper>
      </Col>
      <Col xs={12} sm={9}>
        <article>
          <PostTitle>
            <Link to={path}>{title}</Link>
          </PostTitle>
          <Date>{date}</Date>
          <p>{excerpt}</p>
        </article>
      </Col>
    </>
  );
};

export default ({ data }) => {
  const blogPosts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Grid>
        <Row>
          <Col>
            <h1>Blog</h1>
          </Col>
        </Row>
        <Row as="article">
          {blogPosts &&
            blogPosts.length > 0 &&
            blogPosts.map(({ node }) => {
              return <BlogPreview {...node} key={node.id} />;
            })}
        </Row>
      </Grid>
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            path
            date
            image {
              publicURL
            }
          }
          excerpt
        }
      }
    }
  }
`;
