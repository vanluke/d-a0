import {createAction} from 'redux0-helpers';
import {compose} from 'lodash/fp';
import {combineEpics} from 'redux-observable';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import {
  CONNECT_POSTS,
  CONNECT_POSTS_FAILS,
  CONNECT_POSTS_RECEIVE,
  CONNECT_CLOSE,
  CONNECT_CLEAN,
} from './posts-constants';
import mapPosts from './transform-posts';

export const connectPosts = createAction(CONNECT_POSTS);
export const close = createAction(CONNECT_CLOSE);
export const clean = createAction(CONNECT_CLEAN);
export const connectPostsFails = createAction(CONNECT_POSTS_FAILS);
export const connectPostsReceive = createAction(CONNECT_POSTS_RECEIVE);

export const postsConnectEpic = (action$, store, {postsService}) =>
  action$.ofType(CONNECT_POSTS)
    .mergeMap(() => postsService.connect()
      .catch(error =>
        Observable.of(connectPostsFails({
          error,
        }))
    ).map(posts => compose(
      p => connectPostsReceive({posts: p}),
      mapPosts,
    )(posts)),
  );

export const postsCloseEpic = (action$, store, {postsService}) =>
  action$.ofType(CONNECT_CLOSE)
    .mergeMap(() => Observable.of(postsService.disconnect()))
    .map(() => clean());

export const postsEpic = combineEpics(postsConnectEpic, postsCloseEpic);
