import {Redirect} from 'react-router-dom';
import {withProps} from 'recompose';

const withRedirect = to => withProps({to})(Redirect);

export default withRedirect;
