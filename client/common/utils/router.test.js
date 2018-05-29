import {isLoginPathname} from './router';

test('should validate login pathname', () => {
  let location = {
    path: '/login',
  };
  let actual = isLoginPathname(location);
  expect(actual).toBeTruthy();
  location = {
    path: '/',
  };
  actual = isLoginPathname(location);
  expect(actual).toBeFalsy();
});
