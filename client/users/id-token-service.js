import config from 'client/common/config';
import {tokenService} from 'client/authentication/authentication-service';
import user, {fillUser} from 'client/users/user-state';
import {getToken} from './access-token-service';

const idTokenService = tokenService(config.token.idToken);

const idToken = () => idTokenService.getToken();

export const isTokenValid = token => token && (token.exp > Date.now() / 1000);

export const getIdToken = () => {
  try {
    const claims = idTokenService.decode(idToken());
    const accessToken = getToken();
    return fillUser(user)({...claims, ...accessToken});
  } catch (e) {
    return undefined;
  }
};

export const clearIdToken = () => idTokenService.removeToken();
