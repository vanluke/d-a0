import React from 'react';
import {shallow, mount} from 'enzyme';
import {
  Img,
  Header,
  BouncingArrow,
} from './landing-styled';
import Landing from './landing';

describe('Landing', () => {
  it('should render', () => {
    const wrapper = shallow(<Landing />);
    expect(wrapper).not.toBeEmptyRender();
  });

  it('should render image', () => {
    const wrapper = shallow(<Landing />);
    const actual = wrapper.find(Img).props();
    const expected = {src: {}, alt: 'Trust me'};
    expect(expected).toEqual(actual);
  });

  it('should render header', () => {
    const wrapper = mount(<Landing />);
    const actual = wrapper.find(Header).text();
    const expected = 'Welcome!';
    expect(expected).toEqual(actual);
  });

  it('should render bouncing arrow', () => {
    const wrapper = mount(<Landing />);
    const actual = wrapper.find(BouncingArrow);
    expect(actual).toHaveLength(1);
  });
});
