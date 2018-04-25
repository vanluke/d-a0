import {combineEpics} from 'redux-observable';
import {updateProfileEpic} from 'client/users/profile/state';

export default combineEpics(updateProfileEpic);
