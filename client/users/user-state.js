import Immutable from 'seamless-immutable';
import {isTokenValid} from 'client/users/id-token-service';

export default Immutable({
  name: '',
  picture: '',
  email: '',
  nickname: '',
  isAuthenticated: false,
});

export const fillUser = user => claims => user
  .set('name', claims.name)
  .set('email', claims.email)
  .set('nickname', claims.nickname)
  .set('isAuthenticated', isTokenValid(claims))
  .set('picture', claims.picture);
