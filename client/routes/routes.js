import React from 'react';
import Login from 'client/authentication/login';
import Root from 'client/root';
import withPrivateRoute from './private-routes';

const Home = () => (<span>Home route</span>);

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
