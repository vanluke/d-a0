import {createAction} from 'redux0-helpers';
import {
  LOGOUT,
  LOGIN,
} from './nav-bar-constants';

export const logout = createAction(LOGOUT);
export const login = createAction(LOGIN);
