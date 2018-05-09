export const selectRoot = state => state.posts;
export const selectPosts = state => selectRoot(state).posts;
export const selectIsLoading = state => selectRoot(state).isLoading;
