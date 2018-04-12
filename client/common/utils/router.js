const loginPathname = '/login';

export const isLoginPathname = location =>
  location && location.pathname.includes(loginPathname);
