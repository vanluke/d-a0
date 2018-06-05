import {
  selectPosts,
  selectIsLoading,
} from './posts-selectors';

describe('Posts selectors', () => {
  const state = {
    posts: {
      posts: [],
      isLoading: false,
    },
  };
  it('should select posts', () => {
    const actual = selectPosts(state);
    const expected = [];
    expect(expected).toEqual(actual);
  });
  it('should select isLoading', () => {
    const actual = selectIsLoading(state);
    const expected = false;
    expect(expected).toEqual(actual);
  });
});
