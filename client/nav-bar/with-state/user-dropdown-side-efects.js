import {
  compose,
} from 'recompose';
import {removeUserTokens} from 'client/users/token-service';
import {logout} from '../state';

export default ({dispatch, history}) => compose(
  () => history.push('/login'),
  removeUserTokens,
  () => dispatch(logout()),
)();
