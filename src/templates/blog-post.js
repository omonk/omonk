/* eslint-disable react/no-danger */
import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <Grid>
        <Row>
          <Col xs={12}>
            <h1>{post.frontmatter.title}</h1>
            <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
          </Col>
        </Row>
      </Grid>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        tags
        title
      }
      html
    }
  }
`;

export default BlogPost;
