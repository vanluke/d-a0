import React from 'react';
import {shallow} from 'enzyme';
import Tab from './tab';
import {Button} from './tabs-styled';

describe('Tab', () => {
  it('should render', () => {
    const TextContent = () => (<span>text</span>);
    const wrapper = shallow(<Tab><TextContent /></Tab>);
    expect(wrapper).not.toBeEmptyRender();
  });

  it('should handle on tab click', () => {
    const TextContent = () => (<span>text</span>);
    const props = {
      onClick: jest.fn(),
    };
    const wrapper = shallow(<Tab {...props}><TextContent /></Tab>);
    wrapper.simulate('click');
    expect(props.onClick).toHaveBeenCalled();
  });

  it('should tab be disabled', () => {
    const TextContent = () => (<span>text</span>);
    const props = {
      onClick: jest.fn(),
      disabled: true,
    };
    const wrapper = shallow(<Tab {...props}><TextContent /></Tab>);
    const actual = wrapper.find(Button).prop('disabled');
    wrapper.simulate('click');
    expect(actual).toBeTruthy();
    expect(props.onClick).not.toHaveBeenCalled();
  });

  it('should tab be active', () => {
    const TextContent = () => (<span>text</span>);
    const props = {
      onClick: jest.fn(),
      active: true,
    };
    const wrapper = shallow(<Tab {...props}><TextContent /></Tab>);
    const actual = wrapper.find(Button).prop('active');
    expect(actual).toBeTruthy();
  });
});
