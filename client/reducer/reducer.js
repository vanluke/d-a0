import {combineReducers} from 'redux';
import user from 'client/users/user-reducer';
import {profileReducer} from 'client/users/profile/state';
import {postsReducer, postReducer} from 'client/posts/state';

export default combineReducers({
  user,
  post: postReducer,
  posts: postsReducer,
  profile: profileReducer,
});
