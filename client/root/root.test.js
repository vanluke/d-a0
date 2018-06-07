import React from 'react';
import {shallow} from 'enzyme';
import NavBar from 'client/nav-bar';
import Root from './root';

describe('Root', () => {
  it('should render', () => {
    const props = {
      route: {routes: []},
    };
    const wrapper = shallow(<Root {...props} />);
    expect(wrapper.isEmptyRender()).toBeFalsy();
  });
  it('should render NavBar', () => {
    const props = {
      route: {routes: []},
    };
    const wrapper = shallow(<Root {...props} />);
    expect(wrapper.find(NavBar).isEmptyRender()).toBeFalsy();
  });
});
