import Login from 'client/authentication/login';
import Root from 'client/root';
import Home from 'client/landing';
import Profile from 'client/users/profile';
import Posts, {PostDetails} from 'client/posts';
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
        path: '/posts',
        component: Posts,
      },
      {
        exact: true,
        path: '/posts/:postId',
        component: PostDetails,
      },
      {
        exact: true,
        component: withPrivateRoute(Home)('login'),
        path: '/home',
      },
      {
        exact: true,
        component: withPrivateRoute(Profile)('login'),
        path: '/profile',
      },
    ],
  },
];

export default routes;
