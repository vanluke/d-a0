import React from 'react';
import {shallow} from 'enzyme';
import TabPanel from './tab-panel';

describe('Tab Panel', () => {
  it('should render', () => {
    const Span = () => (<span>Span</span>);
    const wrapper = shallow( // eslint-disable-line
      <TabPanel>
        <Span />
      </TabPanel>);
    expect(wrapper).not.toBeEmptyRender();
  });
  it('should render children', () => {
    const Span = () => (<span>Span</span>);
    const wrapper = shallow( // eslint-disable-line
      <TabPanel>
        <Span />
      </TabPanel>);
    expect(wrapper.find(Span)).toHaveLength(1);
  });
});
