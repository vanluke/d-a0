import {combineEpics} from 'redux-observable';
import {updateProfileEpic} from 'client/users/profile/state';
import {postsEpic, getPostEpic} from 'client/posts/state';

export default combineEpics(updateProfileEpic, postsEpic, getPostEpic);
