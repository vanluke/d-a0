import {mapToReducer} from 'redux0-helpers';
import initState, {fillUser} from './user-state';
import {NAV_INIT} from './user-constants';
import {getToken} from './access-token-service';

export default mapToReducer({
  [NAV_INIT]: (state, {payload}) => fillUser(state)({...payload, ...getToken()}),
})(initState);
