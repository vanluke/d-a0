import {
  CONNECT_POSTS,
  CONNECT_POSTS_FAILS,
  CONNECT_POSTS_RECEIVE,
} from './posts-constants';
import reducer, {initialState} from './posts-reducer';

describe('Posts reducer', () => {
  it('should handle init state', () => {
    const action = {
    };
    const actual = reducer(undefined, action);
    expect(actual).toEqual(initialState);
  });
  it('should CONNECT_POSTS set isLoading', () => {
    const action = {
      type: CONNECT_POSTS,
    };
    const actual = reducer(undefined, action);
    const expected = initialState.set('isLoading', true);
    expect(actual).toEqual(expected);
  });
  it('should CONNECT_POSTS_FAILS set error and isLoading', () => {
    const error = {
      message: 'error',
    };
    const action = {
      type: CONNECT_POSTS_FAILS,
      payload: {
        error,
      },
    };
    const actual = reducer(undefined, action);
    const expected = initialState.set('isLoading', false).set('error', error);
    expect(actual).toEqual(expected);
  });
  it('should CONNECT_POSTS_RECEIVE set posts and isLoading', () => {
    const posts = [{
      id: 1,
    }];
    const action = {
      type: CONNECT_POSTS_RECEIVE,
      payload: {
        posts,
      },
    };
    const actual = reducer(undefined, action);
    const expected = initialState.set('isLoading', false).set('posts', posts);
    expect(actual).toEqual(expected);
  });
});
