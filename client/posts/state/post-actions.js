import {createAction} from 'redux0-helpers';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import {
  GET_POST,
  GET_POST_FAILS,
  GET_POST_RECEIVE,
} from './post-constants';

export const getPost = createAction(GET_POST);
export const postFails = createAction(GET_POST_FAILS);
export const postReceive = createAction(GET_POST_RECEIVE);

export const getPostEpic = (action$, store, {postsService}) =>
  action$.ofType(GET_POST)
    .mergeMap(action => postsService.getPost(action.payload)
      .catch(error =>
        Observable.of(postFails({
          error,
        })))
      .map(({response}) => response)
      .map(post => postReceive({post})));
