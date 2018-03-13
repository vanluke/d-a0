export const selectRoot = state => state.test;
export const selectIsBussy = state => selectRoot(state).isBussy;
export const selectError = state => selectRoot(state).error;
export const selectNumbers = state => selectRoot(state).numbers;
