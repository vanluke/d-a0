import {Observable} from 'rxjs/Observable';
import https from 'https';
import xhr2 from 'xhr2';
import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

function ajax(options) {
  if (typeof XMLHttpRequest !== 'undefined') {
    return Observable.ajax(options);
  }
  return Observable.ajax({
    createXHR: () => {
      const xhr = new xhr2();// eslint-disable-line new-cap
      // DO NOT DO rejectUnauthorized: false IN PRODUCTION !
      const agent = new https
        .Agent(process.env.NODE_ENV === 'production'
          ? {}
          : {rejectUnauthorized: false});
      xhr.nodejsSet({httpsAgent: agent});
      return xhr;
    },
    ...options,
  });
}

export {ajax};
