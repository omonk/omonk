/* eslint-disable react/no-danger */
import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';

const Tags = ({ tags = [] }) => {
  return <p>Tags: {tags.join(', ')}</p>;
};

const Article = styled.article``;

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  const {
    frontmatter: { title, tags, date },
    html,
  } = post;

  return (
    <Layout>
      <Grid>
        <Row>
          <Col xs={12}>
            <h1>{title}</h1>
            <p>
              <small>Published: {date}</small>
            </p>
            <Article className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
            {tags && tags.length > 0 && <Tags tags={tags} />}
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
        date
        title
      }
      html
    }
  }
`;

export default BlogPost;
