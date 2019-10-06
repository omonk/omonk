import React from 'react';
import { FaGithub } from 'react-icons/fa';
import styled from 'styled-components';

const Link = styled.a`
  color: inherit;
  font-weight: bold;
  transition: 175ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
  text-decoration: none;
  font-size: 14;
  padding: 2px;
  margin: 2px;
  :last-child {
    padding: 12px;
  }
`;

const Footer = () => {
  const { url } = {};

  return (
    <div
      style={{
        marginTop: 'auto',
        padding: '1rem',
        borderTop: '1px solid grey',
      }}
    >
      <Link href={url} rel="noopener noreferrer" target="_blank">
        <FaGithub
          size={16}
          css={{
            marginRight: '0.5rem',
            verticalAlign: 'sub',
          }}
        />
        <span>Source on Github</span>
      </Link>
    </div>
  );
};

export default Footer;
