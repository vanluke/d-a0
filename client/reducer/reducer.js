import {combineReducers} from 'redux';
import user from 'client/users/user-reducer';
import {profileReducer} from 'client/users/profile/state';
import test from '../test/state';

export default combineReducers({
  test,
  user,
  profile: profileReducer,
});
