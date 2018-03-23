import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import {createAction} from 'redux0-helpers';
import {DISPATCH, DISPATCH_FINISHED, DISPATCH_ERROR} from './test-constants';

export const toggleIsBussy = createAction(DISPATCH);
export const isBussyFinished = createAction(DISPATCH_FINISHED);
export const isBussyError = createAction(DISPATCH_ERROR);

export const testEpic = action$ =>
  action$.ofType(DISPATCH)
    .mergeMap(() => Observable.of(1, 2, 3, 4, 5)
      .map(numbers => isBussyFinished({numbers}))
      .catch(error => Observable.of(isBussyError({
        error,
      }))));
