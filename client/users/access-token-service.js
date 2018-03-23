import config from 'client/common/config';
import {tokenService} from 'client/authentication/authentication-service';

const accessTokenService = tokenService(config.token.accessToken);

const accessToken = () => accessTokenService.getToken();

export const getToken = () => {
  try {
    return accessTokenService.decode(accessToken());
  } catch (e) {
    return undefined;
  }
};

export const isTokenValid = token => token && (token.exp > Date.now() / 1000);

export const clearAccessToken = () => accessTokenService.removeToken();
