import React from 'react';
import {mount} from 'enzyme';
import {
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from 'client/common/components/tabs';
import Tabs from './tabs';

describe('Tabs', () => {
  it('should render', () => {
    const Header = () => (<h2>Header 1</h2>);
    Header.displayName = 'Header';
    const wrapper = mount(<Tabs><Header /></Tabs>);
    expect(wrapper).not.toBeEmptyRender();
  });

  it('should decorate TabPanels with active intex', () => {
    const Header = () => (<h2>Header 1</h2>);
    Header.displayName = 'Header';
    const wrapper = mount(<Tabs>
      <TabPanels>
        <TabPanel tab="basic">
          <Header />
        </TabPanel>
      </TabPanels>
    </Tabs>); // eslint-disable-line
    const actual = wrapper.find(TabPanels).props();
    expect(actual.activeIndex).toEqual(0);
  });

  it('should decorate TabList with active intex and onActivate', () => {
    const Header = () => (<h2>Header 1</h2>);
    Header.displayName = 'Header';
    const wrapper = mount(<Tabs>
      <TabList>
        <Tab tab="basic">Basic</Tab>
      </TabList>
    </Tabs >); // eslint-disable-line
    const actual = wrapper.find(TabList).props();
    expect(actual.activeIndex).toEqual(0);
    expect(actual.onActivate).toBeDefined();
  });

  it('should onActivate set active index', () => {
    const Header = () => (<h2>Header 1</h2>);
    Header.displayName = 'Header';
    const wrapper = mount(<Tabs>
      <Header />
    </Tabs>); // eslint-disable-line
    const activeIndex = 5;
    const {onActivate} = wrapper.instance();
    onActivate(activeIndex);
    const {activeIndex: aI} = wrapper.state();
    expect(aI).toEqual(activeIndex);
  });
});
