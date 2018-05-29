import {branch, renderComponent} from 'recompose';
import Spinner from './spinner';

const withLoading = loading =>
  branch(
    loading,
    renderComponent(Spinner),
  );

export default withLoading;
