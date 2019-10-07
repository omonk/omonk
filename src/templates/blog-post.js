/* eslint-disable react/no-danger */
import React from 'react';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';
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
        <Row>
          <Col xs={12}>
            <footer>
              <hr />
              <p>
                Hi{' '}
                <span role="img" aria-label="waving hand">
                  👋
                </span>{' '}
                {
                  "I'm Ollie, thanks for checking out my blog post. I will usually be writing about JAMstacks and helping to improve developer experience"
                }
              </p>
              <p>
                Check out my work experience and interestes <Link to="/">here</Link>
              </p>
              <p>
                Shoot me a message <Link to="/contact">here</Link>
              </p>
            </footer>
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
