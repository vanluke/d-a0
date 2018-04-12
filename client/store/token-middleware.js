import {getToken, clearIdToken, isTokenValid} from 'client/users/access-token-service';

const checkTokenExpirationMiddleware = () => next => (action) => {
  const token = getToken();
  if (token && !isTokenValid(token)) {
    clearIdToken();
    return next(action);
  }
  return next(action);
};

export default checkTokenExpirationMiddleware;
