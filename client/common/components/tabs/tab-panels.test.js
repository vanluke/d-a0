import React from 'react';
import PropTypes from 'prop-types';
import {shallow, mount} from 'enzyme';
import TabPanels from './tab-panels';

describe('Tab Panels', () => {
  it('should render', () => {
    const props = {
      activeIndex: 0,
    };
    const TextComponent = () => (<div>Component</div>);
    const wrapper = shallow( // eslint-disable-line
      <TabPanels {...props}>
        <TextComponent />
      </TabPanels>);
    expect(wrapper).not.toBeEmptyRender();
  });

  it('should render proper children', () => {
    const props = {
      activeIndex: 2,
    };
    const TextComponent = ({numb}) => (<span key={numb}>Component {numb}</span>);
    TextComponent.displayName = 'TextComponent';
    TextComponent.propTypes = {
      numb: PropTypes.number.isRequired,
    };
    const expected = 'Component 2';
    const wrapper = mount( // eslint-disable-line
      <TabPanels {...props}>
        <TextComponent numb={1} />
        <TextComponent numb={33} />
        <TextComponent numb={2} />
        <TextComponent numb={55} />
      </TabPanels>);
    const actual = wrapper.text();
    expect(actual).toEqual(expected);
  });
});
