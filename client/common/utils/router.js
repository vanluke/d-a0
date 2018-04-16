const loginPathname = '/login';

export const isLoginPathname = location =>
  location && location.path.includes(loginPathname);
