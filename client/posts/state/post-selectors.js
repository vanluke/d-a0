const selectRoot = state => state.post;
export const selectPostIsLoading = state => selectRoot(state).isLoading;
export const selectPost = state => selectRoot(state).post;
