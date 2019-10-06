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

const BlogPreview = ({ frontmatter, excerpt }) => {
  const { path, title, date } = frontmatter;

  return (
    <article>
      <PostTitle>
        <Link to={path}>{title}</Link>
      </PostTitle>
      <Date>{date}</Date>
      <p>{excerpt}</p>
    </article>
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
          <Col xs={12}>
            {blogPosts &&
              blogPosts.length > 0 &&
              blogPosts.map(({ node }) => {
                return <BlogPreview {...node} key={node.id} />;
              })}
          </Col>
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
          }
          excerpt
        }
      }
    }
  }
`;
