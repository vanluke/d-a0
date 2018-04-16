import jwt from 'jsonwebtoken';
import storage from 'client/common/storage';

const tokenService = key => ({
  setToken(token) {
    storage().setItem(key, token);
  },
  getToken() {
    return storage().getItem(key);
  },
  removeToken() {
    storage().removeItem(key);
  },
  decode(token) {
    return jwt.decode(token);
  },
});

export default tokenService;
