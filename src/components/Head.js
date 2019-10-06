import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

function Head({ description, lang, meta, keywords, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription = description || data.site.siteMetadata.description;
        return (
          <Helmet>
            <html lang="en" />
            <title>{title}</title>
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            <meta name="description" content={metaDescription} />
            <meta property="og:title" content="title" />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:type" content="`website`" />
            <meta name="twitter:card" content="`summary`" />
            <meta name="twitter:title" content="title" />
            <meta name="twitter:description" content={metaDescription} />
            {keywords.length > 0 ? <meta name="keywords" content={keywords.join(`, `)} /> : null}
          </Helmet>
        );
      }}
    />
  );
}

Head.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
};

Head.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default Head;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
