import {mapToReducer} from 'redux0-helpers';
import Immutable from 'seamless-immutable';
import {
  DISPATCH,
  DISPATCH_FINISHED,
  DISPATCH_ERROR,
} from './test-constants';

export const initState = Immutable({
  isBussy: false,
  error: '',
  numbers: [],
});

export default mapToReducer({
  [DISPATCH]: state => state.set('isBussy', state.isBussy),
  [DISPATCH_ERROR]: (state, {payload}) => state.set('error', payload.error),
  [DISPATCH_FINISHED]: (state, {payload}) => state.set('numbers', payload.numbers),
})(initState);
