import {mapToReducer} from 'redux0-helpers';
import Immutable from 'seamless-immutable';
import {
  GET_POST,
  GET_POST_FAILS,
  GET_POST_RECEIVE,
} from './post-constants';

export const initialState = Immutable({
  post: undefined,
  isLoading: false,
  error: '',
});

export default mapToReducer({
  [GET_POST]: state => Immutable.from(state).set('isLoading', true),
  [GET_POST_RECEIVE]: (state, {payload}) => Immutable.from(state).set('post', payload.post).set('isLoading', false),
  [GET_POST_FAILS]: (state, {payload}) => Immutable.from(state).set('error', payload.error).set('isLoading', false),
})(initialState);
