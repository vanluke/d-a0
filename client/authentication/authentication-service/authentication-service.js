import config from 'client/common/config';
import request from 'client/common/request';
import secretService from './secret-service';

const authenticationPath = `${config.api.path}/authenticate`;

const mixUpClaims = ({login, password}) => {
  const loginEncrypted = secretService.encrypt(login);
  const passwordEncrypted = secretService.encrypt(password);
  return {
    login: loginEncrypted,
    password: passwordEncrypted,
  };
};

const authenticationService = {
  authenticate({login, password}) {
    return request({
      url: `${authenticationPath}`,
      method: 'post',
      data: mixUpClaims({login, password}),
    });
  },
};

export default authenticationService;
