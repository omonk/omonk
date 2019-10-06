import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import remcalc from 'remcalc';

import Head from './Head';
import theme from '../utils/theme';
import Header from './Header';

const GlobalStyle = createGlobalStyle`
  body {
    margin-bottom: ${remcalc(20)}
  }
  
  .blog-post-content {
    .gatsby-highlight {
      margin-bottom: ${remcalc(20)}
    }
    
    .gatsby-resp-image-wrapper + figcaption {
      margin-bottom: ${remcalc(20)};
      font-style: italic;
      color: #aeaeae;
    }
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  li {
    margin-bottom: 0
  }
`;

const Layout = ({ children, title = 'Ollie Monk' }) => {
  return (
    <>
      <Head title={title} />
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Header />
          {children}
        </>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
