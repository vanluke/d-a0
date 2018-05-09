import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Body,
  Number,
  Author,
  Title,
  About,
  Tags,
  Image,
  Button,
  Meta,
  Makes,
} from './card-styled';

const Card = ({
  image,
  registered,
  author,
  title,
  about,
  tags,
  makes,
}) => (
  <Container>
    <Body>
      <Number date={registered} />
      <Author>{author}</Author>
      <Title>{title}</Title>
      <About>{about}</About>
      <Button>read</Button>
      <Meta>
        <Makes>{makes}</Makes>
        <Tags>{tags}</Tags>
      </Meta>
    </Body>
    <Image src={image} alt={title} />
  </Container>
);

Card.propTypes = {
  image: PropTypes.string.isRequired,
  registered: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  makes: PropTypes.string.isRequired,
  phone: PropTypes.string,
  tags: PropTypes.string,
};

Card.defaultProps = {
  tags: '',
  phone: '',
};

export default Card;
