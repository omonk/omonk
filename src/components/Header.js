import React from 'react';
import remcalc from 'remcalc';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

const navItems = [
  {
    to: '/blog',
    label: 'Blog',
  },
  {
    to: '/contact',
    label: 'Contact',
  },
];

const StyledRow = styled(Row)`
  padding: ${remcalc(20)} 0 ${remcalc(40)};
`;

const SiteTitle = styled.h1`
  margin-bottom: 0;
`;

const NavList = styled.ol`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  display: inline-block;
`;

const StyledLink = styled(Link)`
  padding: ${remcalc(15)} ${remcalc(20)};
  display: block;
  transition: background-color ease-in 200ms;

  :hover {
    background-color: lightgrey;
  }
`;

const DesktopNav = styled(Col)``;

export default () => {
  return (
    <Grid>
      <StyledRow center="xs" between="xs" middle="xs" as="header">
        <Col>
          <Link to="/" style={{ display: 'block' }}>
            <SiteTitle>Ollie Monk</SiteTitle>
          </Link>
        </Col>
        <DesktopNav>
          <nav>
            <NavList>
              {navItems.map(({ to, label }, idx) => (
                <NavItem key={to}>
                  <StyledLink first={idx === 0} to={to}>
                    {label}
                  </StyledLink>
                </NavItem>
              ))}
            </NavList>
          </nav>
        </DesktopNav>
      </StyledRow>
    </Grid>
  );
};
