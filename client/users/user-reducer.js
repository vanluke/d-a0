import {mapToReducer} from 'redux0-helpers';
import initState, {fillUser} from './user-state';
import {USER_SET, USER_CLEAN} from './user-constants';
import {getToken} from './access-token-service';

export default mapToReducer({
  [USER_SET]: (state, {payload}) => fillUser(state)({...payload, ...getToken()}),
  [USER_CLEAN]: state => fillUser(state)({}),
})(initState);
