import React from 'react';
import {shallow, mount} from 'enzyme';
import {Error} from './error-styled';
import ErrorComponent from './error-message';

describe('Error', () => {
  it('should render', () => {
    const wrapper = shallow(<ErrorComponent />);
    expect(wrapper).not.toBeEmptyRender();
  });
  it('should render Error', () => {
    const wrapper = shallow(<ErrorComponent />);
    const actual = wrapper.find(Error);
    expect(actual).toHaveLength(1);
  });
  it('should render error message', () => {
    const error = 'error message';
    const wrapper = mount(<ErrorComponent error={error} />);
    const actual = wrapper.find(Error).text();
    expect(actual).toEqual(error);
  });
});
