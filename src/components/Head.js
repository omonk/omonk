import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import profile from '../images/profile.jpg';

function Head({ description, lang, keywords, title, image }) {
  const ogImage = image ? image : profile;
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription = description || data.site.siteMetadata.description;
        return (
          <Helmet>
            <html lang="en" />
            <title>{title || data.site.siteMetadata.title}</title>
            <meta name="description" content={metaDescription} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={ogImage} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
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
  keywords: [],
};

Head.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
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
