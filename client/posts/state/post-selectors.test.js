// const selectRoot = state => state.post;
// export const selectPostIsLoading = state => selectRoot(state).isLoading;
// export const selectPost = state => selectRoot(state).post;
import {
  selectPostIsLoading,
  selectPost,
} from './post-selectors';

describe('Post selector', () => {
  const state = {
    post: {
      isLoading: false,
      post: {
        id: 1,
      },
    },
  };
  it('should select isLoading', () => {
    const actual = selectPostIsLoading(state);
    expect(actual).toBeFalsy();
  });
  it('should select post', () => {
    const actual = selectPost(state);
    expect(actual).toEqual(state.post.post);
  });
});
