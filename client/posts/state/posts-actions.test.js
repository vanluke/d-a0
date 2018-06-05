import {ActionsObservable, createEpicMiddleware} from 'redux-observable';
import {createAction} from 'redux0-helpers';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import configureMockStore from 'redux-mock-store';
import {
  CONNECT_POSTS,
  CONNECT_POSTS_RECEIVE,
  CONNECT_CLOSE,
  CONNECT_CLEAN,
} from './posts-constants';
import {postsConnectEpic, postsCloseEpic} from './posts-actions';
import mapPosts from './transform-posts';

describe('Posts epics', () => {
  describe('Posts connect', () => {
    const posts = [{
      id: 1,
      makes: [],
      tags: [],
    }];
    const dependencies = {
      postsService: {
        connect: () => Observable.of(posts),
      },
    };
    const epicMiddleware = createEpicMiddleware(postsConnectEpic, {dependencies});
    const mockStore = configureMockStore([epicMiddleware]);
    let store = mockStore();

    beforeEach(() => {
      store = mockStore();
    });

    afterEach(() => {
      epicMiddleware.replaceEpic(postsConnectEpic);
    });

    it('should dispatch actions', () => {

      store.dispatch(createAction(CONNECT_POSTS)());
      const actual = store.getActions();
      expect(actual).toEqual(expect.arrayContaining([
        createAction(CONNECT_POSTS)(),
        createAction(CONNECT_POSTS_RECEIVE)({posts: mapPosts(posts)}),
      ]));
    });

    it('should receive posts', () => {
      const payload = {postId: 1};
      const action$ = ActionsObservable.of(createAction(CONNECT_POSTS)(payload));
      const expected = {
        type: CONNECT_POSTS_RECEIVE,
        payload: {posts: mapPosts(posts)},
      };

      postsConnectEpic(action$, store, dependencies).subscribe((actual) => {
        expect(actual).toEqual(expected);
      });
    });
    it('should catch error', () => {
      const errorDependencies = {
        postsService: {
          connect: () => Observable.throw({message: 'ERROR'}),
        },
      };
      const action$ = ActionsObservable.of(createAction(CONNECT_POSTS)());

      expect(() => {
        postsConnectEpic(action$, store, errorDependencies).subscribe();
      }).toThrow();
    });
  });
  describe('Posts close connection', () => {
    const disconnectMock = jest.fn();
    const dependencies = {
      postsService: {
        disconnect: disconnectMock,
      },
    };
    const epicMiddleware = createEpicMiddleware(postsCloseEpic, {dependencies});
    const mockStore = configureMockStore([epicMiddleware]);
    let store = mockStore();

    beforeEach(() => {
      store = mockStore();
    });

    afterEach(() => {
      epicMiddleware.replaceEpic(postsCloseEpic);
    });
    it('should dispatch actions', () => {

    });

    it('should close connection', () => {
      const action$ = ActionsObservable.of(createAction(CONNECT_CLOSE)());
      const expected = {
        type: CONNECT_CLEAN,
        payload: {},
      };

      postsCloseEpic(action$, store, dependencies).subscribe((actual) => {
        expect(actual).toEqual(expected);
      });
    });
  });
});
