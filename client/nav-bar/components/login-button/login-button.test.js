import React from 'react';
import {shallow} from 'enzyme';
import Button from './login-button';

describe('Login Button', () => {
  it('should render', () => {
    const props = {
      onClick: jest.fn(),
    };
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper).not.toBeEmptyRender();
  });

  it('should handle on click', () => {
    const props = {
      onClick: jest.fn(),
    };
    const wrapper = shallow(<Button {...props} />);
    wrapper.simulate('click');
    expect(props.onClick).toHaveBeenCalled();
  });

  it('should handle on click with params', () => {
    const props = {
      onClick: jest.fn(),
      login: 'login',
      password: 'password',
    };
    const wrapper = shallow(<Button {...props} />);
    wrapper.simulate('click');
    expect(props.onClick).toHaveBeenCalledWith({
      login: props.login,
      password: props.password,
    });
  });
});
