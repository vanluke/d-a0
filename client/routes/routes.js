import Root from '../root';
import Test from '../test';

export const routes = [
  {
    component: Root,
    path: '/',
    children: [
      {
        exact: true,
        path: '/test',
        component: Test,
      },
    ],
  },
];

export default routes;
