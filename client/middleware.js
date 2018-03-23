
export const hydrateClientSide = ReactDOM => ReactDOM[!!module.hot ? 'render' : 'hydrate']; // eslint-disable-line
export const getInitialState = () => window.__INITIAL_STATE__; // eslint-disable-line
