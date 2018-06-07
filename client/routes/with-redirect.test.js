import React from 'react';
import {Redirect} from 'react-router-dom';
import {shallow} from 'enzyme';
import withRedirect from './with-redirect';

test('should decorate Redirect with to prop', () => {
  const RedirectToHome = withRedirect('/home');
  const actual = shallow(<RedirectToHome />).find(Redirect).prop('to');
  const expected = '/home';
  expect(actual).toEqual(expected);
});
