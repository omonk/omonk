import React from 'react';
import Layout from '../components/Layout';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

export default () => {
  return (
    <Layout>
      <Grid>
        <Row>
          <Col xs={12} md={8} mdOffset={2}>
            <Row>
              <Col xs={12} as="section">
                <h1>Ollie Monk</h1>
                <h2>Senior Software Engineer</h2>
              </Col>
              <Col xs={12} md={6} as="section">
                <h3>Work</h3>

                <h4>
                  <a href="https://yld.io">Monk Development Ltd.</a>
                </h4>

                <h4>Lead Software Engineer</h4>
                <p>May 2019 - Current</p>

                <p>
                  Working with{' '}
                  <a href="https://www.thetrainline.com" target="_blank" rel="noopener noreferrer">
                    {' '}
                    YLD
                  </a>{' '}
                  to manage delivery of their website project
                </p>

                <hr />

                <h4>
                  <a href="https://yld.io">YLD</a>
                </h4>

                <h4>Software Engineer II</h4>
                <p>March 2018 - May 2019</p>

                <p>
                  Working with{' '}
                  <a href="https://www.thetrainline.com" target="_blank" rel="noopener noreferrer">
                    Trainline
                  </a>{' '}
                  and{' '}
                  <a href="https://www.fye.com/" rel="noopener noreferrer" target="_blank">
                    FYE
                  </a>
                </p>

                <hr />

                <h4>
                  <a href="https://beamly.com">Beamly</a> - Software Engineer II
                </h4>
                <p>June 2016 - March 2018</p>

                <hr />

                <h4>
                  <a href="https://www.tomandco.co.uk/">Tom and Co</a>
                </h4>
                <h4>Frontend Developer</h4>
                <p>February 2014 - June 2016</p>
              </Col>
              <Col xs={12} md={6} as="section">
                <h3>
                  Things I{' '}
                  <span role="img" aria-label="heart">
                    ♥️
                  </span>{' '}
                  <br />
                  <small>(in no specific order)</small>
                </h3>

                <ul>
                  <li>NextJS</li>
                  <li>Typescript</li>
                  <li>Gatsby</li>
                  <li>Healthy git processes</li>
                  <li>Serverless</li>
                  <li>JAMstack</li>
                  <li>Wakeboarding</li>
                  <li>Netlify</li>
                  <li>React</li>
                  <li>Cycling</li>
                  <li>Lint on commit (w/ husky)</li>
                  <li>Redux</li>
                  <li>GraphQL w/ Apollo</li>
                  <li>Unit tests w/ Mocha/ava/Jest</li>
                  <li>NodeJS</li>
                  <li>Conflict free rebasing</li>
                  <li>Climbing</li>
                  <li>ExpressJS</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </Layout>
  );
};
