import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import {createAction} from 'redux0-helpers';
import {
  UPDATE_PROFILE,
  UPDATE_PROFILE_ERROR,
  UPDATE_PROFILE_SUCCESS,
  IS_LOADING,
} from './profile-constants';

export const updateUser = createAction(UPDATE_PROFILE);
export const setIsLoading = createAction(IS_LOADING);
export const updateProfileSuccess = createAction(UPDATE_PROFILE_SUCCESS);
export const updateProfileError = createAction(UPDATE_PROFILE_ERROR);

export const updateProfileEpic = (action$, store, {profileService}) =>
  action$.ofType(UPDATE_PROFILE)
    .mergeMap(action => profileService.updateProfile(action.payload)
      .map(profile => updateProfileSuccess({profile}))
      .catch(error => Observable.of(updateProfileError({
        error,
      }))));
