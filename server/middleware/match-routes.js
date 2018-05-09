import {matchRoutes} from 'react-router-config';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/concat';
import {ActionsObservable} from 'redux-observable';

const handleRoutes = ({
  routes,
  store,
  dependencies,
  render,
}) => ({
  req,
}) => matchRoutes(routes, req.url)
  .reduce((acc, {route: {component}}) => {
    const connect = component && component.fetch && component.fetch;
    const params = req.url && req.url.split('/').pop();
    const isFile = params && params.indexOf('.') >= 0;
    return acc.concat((!isFile && connect) ?
      connect.epic(ActionsObservable.of(connect.action$(params)), store, dependencies) :
      Observable.of({type: ''}));
  }, Observable.empty())
  .map((ac = {type: ''}) => store.dispatch(ac))
  .toPromise()
  .then(() => {
    const context = {};
    return render({
      req,
      context,
      routes,
      store,
    });
  });

export default handleRoutes;
