import React from 'react';
import {shallow} from 'enzyme';
import UserNav from 'client/nav-bar/with-state/nav-bar-branch';
import {
  Link as Anchor,
} from './nav-styled';
import Nav from './nav';

describe('Nav', () => {
  it('should render', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper).not.toBeEmptyRender();
  });
  it('should render UserNav', () => {
    const wrapper = shallow(<Nav />);
    const actual = wrapper.find(UserNav);
    expect(actual).toHaveLength(1);
  });
  it('should render home link', () => {
    const wrapper = shallow(<Nav />);
    const actual = wrapper
      .find(Anchor)
      .filterWhere(p => p.prop('to') === '/home');
    expect(actual).toHaveLength(1);
  });

  it('should render posts link', () => {
    const wrapper = shallow(<Nav />);
    const actual = wrapper
      .find(Anchor)
      .filterWhere(p => p.prop('to') === '/posts');
    expect(actual).toHaveLength(1);
  });
});
