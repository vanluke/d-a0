import {branch, renderComponent} from 'recompose';
import Spinner from './spinner';

const withLoading = branch(
  props => props.loading,
  renderComponent(Spinner),
);

export default withLoading;
