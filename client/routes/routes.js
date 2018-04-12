import Login from 'client/authentication/login';
import Root from 'client/root';
import Home from 'client/landing';
import withPrivateRoute from './private-routes';

export const routes = [
  {
    component: Root,
    path: '/',
    routes: [
      {
        exact: true,
        path: '/login',
        component: Login,
      },
      {
        exact: true,
        component: withPrivateRoute(Home)('login'),
        path: '/home',
      },
    ],
  },
];

export default routes;
