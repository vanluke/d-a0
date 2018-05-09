import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Posts from './components/posts';
import {
  connectPosts,
  close,
  selectPosts,
  selectIsLoading,
} from './state';

class PostsContainer extends PureComponent {
  componentDidMount() {
    const {initialize} = this.props;
    initialize();
  }

  componentWillUnmount() {
    const {closeConnection} = this.props;
    closeConnection();
  }

  render() {
    const {posts, isLoading} = this.props;
    return (<Posts
      posts={posts}
      isLoading={isLoading}
    />);
  }
}

PostsContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })).isRequired,
  isLoading: PropTypes.bool.isRequired,
  initialize: PropTypes.func.isRequired,
  closeConnection: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  posts: selectPosts(state),
  isLoading: selectIsLoading(state),
});

export default connect(mapStateToProps, {
  initialize: connectPosts,
  closeConnection: close,
})(PostsContainer);
