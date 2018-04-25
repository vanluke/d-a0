import {withHandlers, compose} from 'recompose';
import {withRouter} from 'react-router';
import LoginButton from '../components/login-button';

export default compose(
  withRouter,
  withHandlers({
    onClick: ({history}) => () => history.push('/login'),
  }),
)(LoginButton);
