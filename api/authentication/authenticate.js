import request from '../request';
import config from '../config';
import securityService from './security-service';

const {
  audience,
  clientId,
  routes,
  clientSecret,
} = config.get('auth0');

export default (req, res) => {
  const {login, password} = req.body;
  const tokenBody = {
    grant_type: 'password',
    username: securityService.decrypt(login),
    password: securityService.decrypt(password),
    audience,
    scope: 'openid read:current_user update:current_user_metadata',
    client_id: clientId,
    client_secret: clientSecret,
  };
  return request({
    url: routes.token,
    method: 'post',
    data: tokenBody,
  }).map(({response}) => response)
    .catch(err => res.send(500, err))
    .subscribe(response => res.send(200, response));
};
