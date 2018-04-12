import jwt from 'jsonwebtoken';

const getStorage = typeof window !== 'undefined' && window && window.localStorage;

const localStorage = () => getStorage || global.localStorage;

const tokenService = key => ({
  setToken(token) {
    localStorage().setItem(key, token);
  },
  getToken() {
    return localStorage().getItem(key);
  },
  removeToken() {
    localStorage().removeItem(key);
  },
  decode(token) {
    return jwt.decode(token);
  },
});

export default tokenService;
