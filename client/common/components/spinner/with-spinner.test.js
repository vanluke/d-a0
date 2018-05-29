import React from 'react';
import {mount} from 'enzyme';
import Spinner from './spinner';
import withLoadingSpinner from './with-spinner';

describe('With Loading Spinner', () => {
  it('should render spinner', () => {
    const loading = () => true;
    const TestComponent = () => (<span>Text</span>);
    const Component = withLoadingSpinner(loading)(TestComponent);
    const wrapper = mount(<Component />);
    const actual = wrapper.find(Spinner).name();
    expect(actual).toEqual('Spinner');
  });

  it('should not render spinner', () => {
    const loading = () => false;
    const TestComponent = () => (<span>Text</span>);
    const Component = withLoadingSpinner(loading)(TestComponent);
    const wrapper = mount(<Component />);
    const actual = wrapper.find(TestComponent).name();
    expect(actual).toEqual('TestComponent');
  });
});
