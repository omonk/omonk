import React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';
import remcalc from 'remcalc';
import { Link } from 'gatsby';
import styled from 'styled-components';

const PostTitle = styled.h3`
  margin-bottom: ${remcalc(15)};
`;

const Date = styled.small`
  display: inline-block;
  margin-bottom: ${remcalc(15)};
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 0;
  padding-bottom: 100%;
  margin-bottom: ${remcalc(20)};

  img {
    margin-bottom: 0;
    position: absolute;
    top: 0;
  }
`;

const BlogPreviewWrapper = styled(Row)`
  margin-bottom: ${remcalc(20)};
`;

const BlogPreview = ({ frontmatter, excerpt }) => {
  const { path, title, date, image } = frontmatter;

  return (
    <BlogPreviewWrapper as="article">
      <Col xs={5} sm={3}>
        <Link to={path}>
          <ImageWrapper>{image && <img src={image.publicURL} alt={`Preview graphic for ${title}`} />}</ImageWrapper>
        </Link>
      </Col>
      <Col xs={12} sm={9}>
        <article>
          <PostTitle>
            <Link to={path}>{title}</Link>
          </PostTitle>
          <Date>{date}</Date>
          <p>{excerpt}</p>
        </article>
      </Col>
    </BlogPreviewWrapper>
  );
};

export default BlogPreview;
