import routes from '../client/routes';
import {send, matchRoutes} from './middleware';
import configureStore from '../client/store';

const store = configureStore();

export default stats => (req, res) => {
  const handleRoutes = matchRoutes({routes, render: () => send({res, req, routes, store, stats})});
  return handleRoutes({res, req});
}
