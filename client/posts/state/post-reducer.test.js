import {
  GET_POST,
  GET_POST_FAILS,
  GET_POST_RECEIVE,
} from './post-constants';
import reducer, {initialState} from './post-reducer';

describe('Post reducer', () => {
  it('should handle init state', () => {
    const action = {
    };
    const actual = reducer(undefined, action);
    expect(actual).toEqual(initialState);
  });
  it('should GET_POST set isLoading', () => {
    const action = {
      type: GET_POST,
    };
    const actual = reducer(undefined, action);
    const expected = initialState.set('isLoading', true);
    expect(actual).toEqual(expected);
  });
  it('should GET_POST_FAILS set error and isLoading', () => {
    const error = {
      message: 'error',
    };
    const action = {
      type: GET_POST_FAILS,
      payload: {
        error,
      },
    };
    const actual = reducer(undefined, action);
    const expected = initialState.set('isLoading', false).set('error', error);
    expect(actual).toEqual(expected);
  });
  it('should GET_POST_RECEIVE set post and isLoading', () => {
    const post = {
      id: 1,
    };
    const action = {
      type: GET_POST_RECEIVE,
      payload: {
        post,
      },
    };
    const actual = reducer(undefined, action);
    const expected = initialState.set('isLoading', false).set('post', post);
    expect(actual).toEqual(expected);
  });
});
