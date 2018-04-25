import Immutable from 'seamless-immutable';
import {isTokenValid} from 'client/users/id-token-service';

export default Immutable({
  name: '',
  picture: '',
  user_id: '',
  email: '',
  nickname: '',
  isAuthenticated: false,
});

export const fillUser = user => claims => user
  .set('name', claims.name)
  .set('email', claims.email)
  .set('nickname', claims.nickname)
  .set('user_id', claims.sub)
  .set('isAuthenticated', isTokenValid(claims))
  .set('picture', claims.picture);
