import {connect} from 'react-redux';
import ProfileDetails from './components/details';

export default connect(({user}) => ({...user}))(ProfileDetails);
