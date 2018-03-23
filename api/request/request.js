import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import {ajax} from './isomorphic-ajax';

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
  },
}).catch(e => Observable.of(e));

export default request;
