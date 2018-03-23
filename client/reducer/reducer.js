import {combineReducers} from 'redux';
import user from 'client/users/user-reducer';
import test from '../test/state';

export default combineReducers({
  test,
  user,
});
