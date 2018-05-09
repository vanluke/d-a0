import React, {PureComponent} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
  getPost,
  getPostEpic,
  selectPostIsLoading,
  selectPost,
} from './state';
import Details from './components/details';

class PostDetails extends PureComponent {
  // componentDidMount() {
  //   const {initialize, match: {params}} = this.props;
  //   return initialize(params);
  // }

  render() {
    const {isLoading, post} = this.props;
    return (<Details {...post} isLoading={isLoading} />);
  }
}


PostDetails.propTypes = {
  initialize: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      postId: PropTypes.string,
    }),
  }).isRequired,
};

PostDetails.fetch = {
  action$: postId => getPost({postId}),
  epic: getPostEpic,
};

const mapStateToProps = state => ({
  post: selectPost(state),
  isLoading: selectPostIsLoading(state),
});

export default connect(mapStateToProps, {initialize: getPost})(PostDetails);
