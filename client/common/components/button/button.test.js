import React from 'react';
import {shallow, mount} from 'enzyme';
import Button from './button';
import {Button as MaterialButton, Text} from './button-styled';

describe('Button', () => {
  it('should render', () => {
    const children = (<div />);
    const wrapper = shallow(<Button>{children}</Button>);
    expect(wrapper).not.toBeEmptyRender();
  });

  it('should render children as a node', () => {
    const children = (<div />);
    const wrapper = shallow(<Button>{children}</Button>);
    const actual = wrapper.find('div');
    expect(actual).toHaveLength(1);
  });

  it('should render children as string', () => {
    const children = 'text';
    const wrapper = mount(<Button>{children}</Button>);
    const actual = wrapper.find(Text).text();
    expect(actual).toEqual(children);
  });
  it('should render Text', () => {
    const children = (<div />);
    const wrapper = shallow(<Button>{children}</Button>);
    const actual = wrapper.find(Text);
    expect(actual).toHaveLength(1);
  });
  it('should render MaterialButton', () => {
    const children = (<div />);
    const wrapper = shallow(<Button>{children}</Button>);
    const actual = wrapper.find(MaterialButton);
    expect(actual).toHaveLength(1);
  });
});
