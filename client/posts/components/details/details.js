import React from 'react';
import PropTypes from 'prop-types';
import withSpinner from 'client/common/components/spinner';
import {
  Section,
  Metadata,
  Number,
  Header,
  Title,
  Author,
  About,
  Balance,
  Makes,
  Description,
  Contact,
  Phone,
  Email,
  Tags,
  Image,
} from './details-styled';

const Post = ({
  author,
  email,
  tags,
  balanceTo,
  image,
  title,
  name,
  makes,
  phone,
  location,
  about,
  description,
  registered,
}) => (
  location && (
  <Section>
    <Image src={image} alt={name} />
    <Metadata>
      <Number date={registered} />
      <Author>{author}</Author>
      <Tags>{tags}</Tags>
    </Metadata>
    <Header>
      <Title>{title}</Title>
      <About>{about}</About>
    </Header>
    <Balance>{balanceTo}</Balance>
    <Makes>{makes}</Makes>
    <Description>{description}</Description>
    <Contact>
      <Phone>{phone}</Phone>
      <Email>{email}</Email>
    </Contact>
  </Section>
  ));


Post.propTypes = {
  author: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  balanceTo: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string,
  makes: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  location: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
  }).isRequired,
  about: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  registered: PropTypes.string.isRequired,
};

Post.defaultProps = {
  name: '',
};

const enhanced = withSpinner(props => props.isLoading);

export default enhanced(Post);
