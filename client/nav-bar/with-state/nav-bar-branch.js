import {
  branch,
  defaultProps,
  renderComponent,
  withHandlers,
  compose,
  pure,
} from 'recompose';
import Immutable from 'seamless-immutable';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {isLoginPathname} from 'client/common/utils';
import UserDropdown from '../components/user-dropdown';
import LoginButton from './login-button-container';
import logoutComposition from './user-dropdown-side-efects';

const withBranch = compose(
  defaultProps({user: Immutable({})}),
  pure,
  withRouter,
  connect(({user, match}) => ({user, match})),
  withHandlers({
    logout: ({dispatch, history}) => () => logoutComposition({dispatch, history}),
  }),
  branch(
    props => props.user.isAuthenticated && !isLoginPathname(props.match),
    renderComponent(UserDropdown),
  ),
);

export default withBranch(LoginButton);
