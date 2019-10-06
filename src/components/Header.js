import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.blue};
`;

const Header = () => {
  return (
    <Wrapper>
      <Grid>
        <Row between="xs" middle="xs">
          <Col xs={12} md={6}>
            <Link to="/">
              <h2>Ollie Monk</h2>
            </Link>
          </Col>
        </Row>
      </Grid>
    </Wrapper>
  );
};

export default Header;
