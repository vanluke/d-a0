import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import config from 'client/common/config';
import tokenService from 'client/authentication/authentication-service/token-service';
import {ajax} from './isomorphic-ajax';

const accessTokenService = tokenService(config.token.accessToken);

const getAccessToken = () => accessTokenService.getToken();

const request = ({
  data = {},
  url = '',
  method = 'get',
}) => ajax({
  method,
  body: data,
  url,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: `Bearer ${getAccessToken()}`,
  },
}).catch(e => Observable.throw(e));

export default request;
