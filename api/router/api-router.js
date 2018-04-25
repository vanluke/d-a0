import router from './router';
import authenticationRoutes from '../authentication/authentication-routes';
import userRoutes from '../users/user-routes';
import config from '../config';

const version = config.get('version');

export default (app) => {
  authenticationRoutes(router);
  app.use(`/api/${version}`, router);
  userRoutes(router);
};
