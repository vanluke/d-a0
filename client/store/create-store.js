import {createEpicMiddleware} from 'redux-observable';
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducer';
import rootEpic from '../epic';

const loggerMiddleware = createLogger();

export const dependencies = {
};

export const epicMiddleware = createEpicMiddleware(rootEpic, {
  dependencies,
});

const createStoreWithMiddleware = () =>
  createStore(rootReducer,
    applyMiddleware(epicMiddleware, loggerMiddleware),
  );

export default function configureStore() {
  return createStoreWithMiddleware();
}
