const selectRoot = state => state.profile;

export const selectIsLoading = state => selectRoot(state).isLoading;
