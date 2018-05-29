import React from 'react';
import {shallow} from 'enzyme';
import TabList from './tab-list';
import {List} from './tabs-styled';

describe('Tab List', () => {
  it('should render', () => {
    const TextComponent = () => (<span>Text Component</span>);
    const wrapper = shallow(<TabList>
      <TextComponent />
    </TabList>); // eslint-disable-line

    expect(wrapper).not.toBeEmptyRender();
  });
  it('should render List', () => {
    const TextComponent = () => (<span>Text Component</span>);
    const wrapper = shallow(<TabList>
      <TextComponent />
    </TabList>); // eslint-disable-line

    expect(wrapper.find(List)).toHaveLength(1);
  });
  it('should decorate children with props', () => {
    const TextComponent = () => (<span>Text Component</span>);
    const wrapper = shallow(<TabList>
      <TextComponent />
    </TabList>); // eslint-disable-line
    const actual = wrapper.find(List).find(TextComponent).props();
    expect(actual).toHaveProperty('active', true);
    expect(actual).toHaveProperty('disabled', false);
    expect(actual).toHaveProperty('onClick');
  });
  it('should handle on click', () => {
    const TextComponent = () => (<span>Text Component</span>);
    const props = {
      onActivate: jest.fn(),
      activeIndex: 3,
    };
    const wrapper = shallow(<TabList {...props}>
      <TextComponent />
    </TabList>); // eslint-disable-line
    const textComponent = wrapper.find(List).find(TextComponent);
    textComponent.simulate('click');
    expect(props.onActivate).toHaveBeenCalledWith(0);
  });

  it('should be active', () => {
    const TextComponent = () => (<span>Text Component</span>);
    const props = {
      onActivate: jest.fn(),
      activeIndex: 0,
    };
    const wrapper = shallow(<TabList {...props}>
      <TextComponent />
    </TabList >); // eslint-disable-line
    const actual = wrapper.find(List).find(TextComponent).prop('active');
    expect(actual).toBeTruthy();
  });
});
