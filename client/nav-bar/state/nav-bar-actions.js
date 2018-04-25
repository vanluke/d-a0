import {createAction} from 'redux0-helpers';
import {
  USER_CLEAN,
} from 'client/users/user-constants';

export const logout = createAction(USER_CLEAN);
