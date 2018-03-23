import config from 'client/common/config';
import {tokenService} from 'client/authentication/authentication-service';
import user from 'client/users/user-state';

const idTokenService = tokenService(config.token.idToken);

const idToken = () => idTokenService.getToken();

export const getIdToken = () => {
  try {
    const claims = idTokenService.decode(idToken());
    return user
      .set('name', claims.name)
      .set('email', claims.email)
      .set('picture', claims.picture);
  } catch (e) {
    return undefined;
  }
};

export const isTokenValid = token => token && (token.exp > Date.now() / 1000);

export const clearIdToken = () => idTokenService.removeToken();
