import React from 'react';
import PropTypes from 'prop-types';
import withSpinner from 'client/common/components/spinner';
import Post from '../card';
import {
  Container,
  List,
  ListItem,
} from './posts-styled';

const enhanced = withSpinner(props => props.isLoading);

const Posts = enhanced(({posts}) => (
  <Container>
    <List>
      {posts.map(post => (
        <ListItem key={post.id}>
          <Post {...post} />
        </ListItem>))
      }
    </List>
  </Container>));

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Posts;
