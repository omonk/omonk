import React from 'react';
import Layout from '../components/Layout';
import { Link, graphql } from 'gatsby';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

export default ({ data }) => {
  const blogPosts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Grid>
        <Row>
          <Col>
            <h1>blog</h1>
          </Col>
          <Col xs={12}>
            {blogPosts &&
              blogPosts.length > 0 &&
              blogPosts.map(({ node }) => {
                return (
                  <div key={node.id}>
                    <h3>
                      <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
                    </h3>
                  </div>
                );
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
          }
        }
      }
    }
  }
`;
