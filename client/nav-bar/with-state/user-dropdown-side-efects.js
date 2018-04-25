import {removeUserTokens} from 'client/users/token-service';
import {logout} from '../state';

const handleLogout = ({dispatch, history}) => {
  removeUserTokens();
  history.push('/login');
  return dispatch(logout());
};

export default handleLogout;
