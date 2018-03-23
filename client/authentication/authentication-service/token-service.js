import jwt from 'jsonwebtoken';

const tokenService = key => ({
  setToken(token) {
    window.localStorage.setItem(key, token);
  },
  getToken() {
    return window.localStorage.getItem(key);
  },
  removeToken() {
    window.localStorage.removeItem(key);
  },
  decode(token) {
    return jwt.decode(token);
  },
});

export default tokenService;
