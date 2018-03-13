import {combineEpics} from 'redux-observable';
import {testEpic} from '../test/state';

export default combineEpics(
  testEpic,
);
