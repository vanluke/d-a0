import authenticate from './authenticate';

export default (router) => {
  router.post('/authenticate', authenticate);
};
