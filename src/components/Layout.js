import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import Head from './Head';
import theme from '../utils/theme';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.blue}
  }
`;

const Layout = ({ children, title = 'Ollie Monk' }) => {
  return (
    <>
      <Head title={title} />
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
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
