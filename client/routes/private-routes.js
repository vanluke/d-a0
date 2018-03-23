import {getToken, isTokenValid} from 'client/users/access-token-service';
import {compose} from 'lodash/fp';
import withRedirect from './with-redirect';

const bindComponent = isAuthenticated => Component => path =>
  (isAuthenticated ? Component : withRedirect(path));

const withPrivateRoute = compose(bindComponent(isTokenValid(getToken())));

export default withPrivateRoute;
