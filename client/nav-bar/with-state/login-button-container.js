import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import LoginButton from '../components/login-button';
import {login} from '../state';

const mapDispathToProps = d => ({
  onClick: ({history}) => {
    history.push('/login');
    return d(login());
  },
});

export default connect(null, mapDispathToProps)(withRouter(LoginButton));
