import {ActionsObservable, createEpicMiddleware} from 'redux-observable';
import {createAction} from 'redux0-helpers';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import configureMockStore from 'redux-mock-store';
import {
  GET_POST,
  GET_POST_RECEIVE,
} from './post-constants';
import {getPostEpic} from './post-actions';

describe('Post epic', () => {
  const post = {
    id: 1,
  };
  const dependencies = {
    postsService: {
      getPost: () => Observable.of(({
        response: {
          ...post,
        },
      })),
    },
  };
  const epicMiddleware = createEpicMiddleware(getPostEpic, {dependencies});
  const mockStore = configureMockStore([epicMiddleware]);
  let store = mockStore();

  beforeEach(() => {
    store = mockStore();
  });

  afterEach(() => {
    epicMiddleware.replaceEpic(getPostEpic);
  });

  it('should dispatch actions', () => {
    const payload = {
      postId: 1,
    };
    store.dispatch(createAction(GET_POST)(payload));
    const actual = store.getActions();
    expect(actual).toEqual(expect.arrayContaining([
      createAction(GET_POST)(payload),
      createAction(GET_POST_RECEIVE)({post}),
    ]));
  });
  it('should receive post', () => {
    const payload = {postId: 1};
    const action$ = ActionsObservable.of(createAction(GET_POST)(payload));
    const expected = {
      type: GET_POST_RECEIVE,
      payload: {post: {id: 1}},
    };

    getPostEpic(action$, store, dependencies).subscribe((actual) => {
      expect(actual).toEqual(expected);
    });
  });
  it('should catch error', () => {
    const payload = {postId: 1};
    const errorDependencies = {
      postsService: {
        getPost: () => Observable.throw({message: 'ERROR'}),
      },
    };
    const action$ = ActionsObservable.of(createAction(GET_POST)(payload));

    expect(() => {
      getPostEpic(action$, store, errorDependencies).subscribe();
    }).toThrow();
  });
});
