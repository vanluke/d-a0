import routes from '../client/routes';
import {send, matchRoutes} from './middleware';
import configureStore, {dependencies} from '../client/store';

const store = configureStore();

export default stats => async (req, res) => {
  const handleRoutes = matchRoutes({
    routes,
    store,
    dependencies,
    render: () => send({
      res,
      req,
      routes,
      store,
      stats,
    }),
  });
  return await handleRoutes({res, req});
};
