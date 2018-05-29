import React from 'react';
import {shallow, mount} from 'enzyme';
import Button from 'client/common/components/flat-button';
import LoginForm from './login-form';
import {
  Label,
} from './login-form-styled';

describe('Login Form', () => {
  const defaultProps = {
    form: {
      name: 'name',
      password: 'password',
    },
    onChange: arg => jest.fn(arg),
    onBlur: () => jest.fn(),
    onSubmit: () => jest.fn(),
    isValid: false,
    errors: {
      name: '',
      password: '',
    },
  };
  it('should render', () => {
    const wrapper = shallow(<LoginForm {...defaultProps} />);
    expect(wrapper).not.toBeEmptyRender();
  });

  it('should handle on login change', () => {
    const onChangeHandler = jest.fn();
    const onChange = jest.fn(() => onChangeHandler);
    const wrapper = mount(<LoginForm {...defaultProps} onChange={onChange} />);
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'login',
        value: 'login-login',
      },
    };
    wrapper.find('input[type="text"]').simulate('change', event);
    const props = wrapper.props();
    expect(props.onChange).toHaveBeenCalledWith('login');
    expect(onChangeHandler).toHaveBeenCalledWith('login-login');
  });

  it('should handle on password change', () => {
    const onChangeHandler = jest.fn();
    const onChange = jest.fn(() => onChangeHandler);
    const wrapper = mount(<LoginForm {...defaultProps} onChange={onChange} />);
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'password',
        value: 'pass',
      },
    };
    wrapper.find('input[type="text"]').simulate('change', event);
    const props = wrapper.props();
    expect(props.onChange).toHaveBeenCalledWith('password');
    expect(onChangeHandler).toHaveBeenCalledWith('pass');
  });

  it('should handle on login focus', () => {
    const onFocusHandler = jest.fn();
    const onFocus = jest.fn(() => onFocusHandler);
    const wrapper = mount(<LoginForm {...defaultProps} onBlur={onFocus} />);
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'login',
        value: 'loglog',
      },
    };
    wrapper.find('input[type="text"]').simulate('focus', event);
    const props = wrapper.props();
    expect(props.onBlur).toHaveBeenCalledWith('login');
    expect(onFocusHandler).toHaveBeenCalled();
  });

  it('should handle on password focus', () => {
    const onFocusHandler = jest.fn();
    const onFocus = jest.fn(() => onFocusHandler);
    const wrapper = mount(<LoginForm {...defaultProps} onBlur={onFocus} />);
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'password',
        value: 'pass',
      },
    };
    wrapper.find('input[type="text"]').simulate('focus', event);
    const props = wrapper.props();
    expect(props.onBlur).toHaveBeenCalledWith('password');
    expect(onFocusHandler).toHaveBeenCalled();
  });

  it('should not handle submit when is invalid', () => {
    const onSubmit = jest.fn();
    const isValid = false;
    const wrapper = shallow(<LoginForm {...defaultProps} onSubmit={onSubmit} isValid={isValid} />);
    wrapper.find(Button).simulate('submit');
    const buttonProps = wrapper.find(Button).at(0).props();
    expect(buttonProps.disabled).toBeTruthy();
    expect(onSubmit).toHaveBeenCalledTimes(0);
  });

  it('should handle submit', () => {
    const onSubmit = jest.fn();
    const isValid = true;
    const wrapper = mount(<LoginForm {...defaultProps} onSubmit={onSubmit} isValid={isValid} />);
    const buttonProps = wrapper.find(Button).at(0).props();
    wrapper.find(Button).simulate('submit');
    expect(buttonProps.disabled).toBeFalsy();
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('should hanle error messages', () => {
    const props = {
      errors: {
        login: 'Should not be empty',
        password: 'Should have at least one capital letter',
      },
    };
    const wrapper = mount(<LoginForm {...defaultProps} {...props} />);
    const loginText = wrapper.find(Label).at(0).text();
    const passwordText = wrapper.find(Label).at(1).text();
    expect(loginText).toEqual('Should not be empty');
    expect(passwordText).toEqual('Should have at least one capital letter');
  });
});
