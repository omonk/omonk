import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import BlogPreview from '../components/BlogPreview';

export default ({ data }) => {
  const blogPosts = data.allMarkdownRemark.edges;

  return (
    <Layout title="Blog | Ollie Monk">
      <Grid>
        <Row>
          <Col>
            <h1>Blog</h1>
          </Col>
        </Row>

        {blogPosts &&
          blogPosts.length > 0 &&
          blogPosts.map(({ node }) => {
            return <BlogPreview {...node} key={node.id} />;
          })}
      </Grid>
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date] }, filter: { frontmatter: { publish: { eq: true } } }) {
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
