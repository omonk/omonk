/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import remcalc from 'remcalc';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import { Hidden } from '../components/Common';
import BlogPreview from '../components/BlogPreview';

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(''),
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value);
      },
    },
  };
};

const InputGroup = styled.div`
  margin-bottom: ${remcalc(20)};

  input,
  textarea {
    display: block;
    width: 100%;
    padding: ${remcalc(10)} ${remcalc(5)};
    border-radius: 4px;
    border-style: solid;
    border-color: lightgrey;
    border-width: 1px;
  }
`;

const Button = styled.button`
  border: none;
  color: whitesmoke;
  cursor: pointer;
  border-radius: 4px;
  padding: ${remcalc(10)} ${remcalc(25)};
  background-color: ${({ theme }) => theme.colors.grey};
  transition: background-color ease-in 200ms;

  :hover {
    background-color: ${({ theme }) => theme.colors.greyLight};
  }
`;

const Contact = ({ data }) => {
  const blogPosts = data.allMarkdownRemark.edges;

  const [isSubmitted, setSubmitted] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const { value: name, bind: bindName } = useInput('');
  const { value: email, bind: bindEmail } = useInput('');
  const { value: message, bind: bindMessage } = useInput('');

  const handleSubmit = evt => {
    evt.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    })
      .then(res => {
        setLoading(false);
        setSubmitted(true);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  };

  return (
    <Layout title="Contact | Ollie Monk">
      <Grid>
        <Row>
          <Col xs={12}>
            <h1>Contact</h1>
          </Col>
        </Row>
        <Row>
          {isError && (
            <Col xs={12}>
              <p>Hmm we seem to have an error...</p>
              <Button onClick={() => setError(false)}>Try again?</Button>
            </Col>
          )}
          {isSubmitted ? (
            <Col xs={12}>
              <p>Thanks for getting in touch! I will aim to get back to you in the next day or so.</p>
              <p>Whilst {"you're"} here, why not check out a few blog posts...</p>
              {blogPosts.map(({ node }) => (
                <BlogPreview key={node.id} {...node} />
              ))}
            </Col>
          ) : (
            <Col xs={12}>
              <form netlify name="contact" netlify-honeypot="bot" onSubmit={handleSubmit}>
                <fieldset style={{ border: 'none ' }}>
                  <Hidden>
                    <label>
                      {"Don’t fill this out if you're human: "}
                      <input name="bot-field" />
                    </label>
                  </Hidden>
                  <InputGroup>
                    <label>
                      Your Name <input required {...bindName} value={name} type="text" name="name" />
                    </label>
                  </InputGroup>

                  <InputGroup>
                    <label>
                      Your Email <input required {...bindEmail} value={email} type="email" name="email" />
                    </label>
                  </InputGroup>

                  <InputGroup>
                    <label>
                      Your Message <textarea required {...bindMessage} value={message} name="message" />
                    </label>
                  </InputGroup>

                  <Button type="submit">{isLoading ? 'One sec...' : 'Send'}</Button>
                </fieldset>
              </form>
            </Col>
          )}
        </Row>
      </Grid>
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date] }
      filter: { frontmatter: { publish: { eq: true } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            date
            image {
              publicURL
            }
          }
          excerpt
        }
      }
    }
  }
`;

export default Contact;
