import {
  branch,
  defaultProps,
  renderComponent,
  compose,
  pure,
} from 'recompose';
import Immutable from 'seamless-immutable';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {isLoginPathname} from 'client/common/utils';
import UserDropdown from '../components/user-dropdown';
import LoginButton from './login-button-container';

const withBranch = C => compose(
  defaultProps({user: Immutable({})}),
  pure,
  withRouter,
  connect(({user, match}) => ({user, match})),
  branch(
    props => props.user.isAuthenticated && !isLoginPathname(props.match),
    renderComponent(UserDropdown),
    renderComponent(LoginButton),
  ),
)(C);

export default withBranch(UserDropdown);
