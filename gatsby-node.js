/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { resolve } = require('path');
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  // Blog Posts
  const { data, error } = await graphql(`
    query {
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
  `);

  if (error) {
    throw new Error(error);
  }

  const { allMarkdownRemark } = data;
  const blogPostTemplate = resolve('./src/templates/blog-post.js');

  const posts = allMarkdownRemark.edges;

  posts.forEach(({ node }, index) => {
    const prev = index === 0 ? null : posts[index - 1].node;
    const next = index === posts.length - 1 ? null : posts[index + 1].node;

    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {
        prev,
        next,
      },
    });
  });
};
