import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import remcalc from 'remcalc';

const Wrapper = styled.footer`
  margin-bottom: ${remcalc(25)};
  padding-top: ${remcalc(25)};
`;

const Footer = () => {
  return (
    <Wrapper>
      <hr />
      <Grid>
        <Row>
          <Col xs={12}>
            <code>
              Built with{' '}
              <a target="_blank" rel="noopener noreferrer" href="https://www.gatsbyjs.org/">
                GatsbyJS
              </a>{' '}
              / Deployed with{' '}
              <a target="_blank" rel="noopener noreferrer" href="https://netlify.com">
                Netlify
              </a>{' '}
              /{' '}
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/omonk/omonk">
                Github Repo
              </a>
            </code>
          </Col>
        </Row>
      </Grid>
    </Wrapper>
  );
};

export default Footer;
