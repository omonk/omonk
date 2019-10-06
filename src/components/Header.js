import React from 'react';
import remcalc from 'remcalc';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

const StyledRow = styled(Row)`
  padding: ${remcalc(20)} 0;
`;

const SiteTitle = styled.h1`
  margin-bottom: 0;
`;

export default () => {
  return (
    <Grid>
      <StyledRow center="xs" between="xs" middle="xs" as="header">
        <Col>
          <Link to="/">
            <SiteTitle>Ollie Monk</SiteTitle>
          </Link>
        </Col>
        <Col>
          <Link to="/blog">Blog</Link>
        </Col>
      </StyledRow>
    </Grid>
  );
};
