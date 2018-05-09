import {mapToReducer} from 'redux0-helpers';
import Immutable from 'seamless-immutable';
import {
  CONNECT_POSTS,
  CONNECT_POSTS_FAILS,
  CONNECT_POSTS_RECEIVE,
} from './posts-constants';

export const initialState = Immutable({
  posts: [],
  isLoading: false,
  error: '',
});

export default mapToReducer({
  [CONNECT_POSTS]: state => Immutable.from(state).set('isLoading', state.posts.length <= 0),
  [CONNECT_POSTS_RECEIVE]: (state, {payload}) => Immutable.from(state).set('posts', payload.posts).set('isLoading', false),
  [CONNECT_POSTS_FAILS]: (state, {payload}) => Immutable.from(state).set('error', payload.error).set('isLoading', false),
})(initialState);
