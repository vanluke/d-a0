import {mapToReducer} from 'redux0-helpers';
import initState from './user-state';
import {NAV_INIT} from './user-constants';


export default mapToReducer({
  [NAV_INIT]: (state, {payload}) => state
    .set('name', payload.name)
    .set('email', payload.email)
    .set('picture', payload.picture),
})(initState);
