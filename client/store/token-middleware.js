import {getIdToken, clearIdToken, isTokenValid} from 'client/users/id-token-service';

const checkTokenExpirationMiddleware = () => next => (action) => {
  const token = getIdToken();
  if (!isTokenValid(token)) {
    clearIdToken();
    return next(action);
  }
  return next(action);
};

export default checkTokenExpirationMiddleware;
