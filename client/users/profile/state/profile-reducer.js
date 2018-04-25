import {mapToReducer} from 'redux0-helpers';
import Immutable from 'seamless-immutable';
import {
  IS_LOADING,
} from './profile-constants';

const initState = Immutable({
  isLoading: false,
  file: '',
});

export default mapToReducer({
  [IS_LOADING]: (state, {payload}) => state.set('isLoading', payload.isLoading),
})(initState);
