import {createEpicMiddleware} from 'redux-observable';
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import {getIdToken} from 'client/users/id-token-service';
import rootEpic from 'client/epic';
import {profileService} from 'client/users/profile';
import rootReducer from 'client/reducer';
import tokenMiddleware from './token-middleware';

const loggerMiddleware = createLogger();

export const dependencies = {
  profileService,
};

export const epicMiddleware = createEpicMiddleware(rootEpic, {
  dependencies,
});

const createStoreWithMiddleware = initState =>
  createStore(
    rootReducer,
    initState,
    applyMiddleware(epicMiddleware, tokenMiddleware, loggerMiddleware),
  );

export default function configureStore(initState) {
  const state = Object.assign({}, JSON.parse(initState || '{}'), {user: getIdToken()});
  const store = createStoreWithMiddleware(state);
  return store;
}
