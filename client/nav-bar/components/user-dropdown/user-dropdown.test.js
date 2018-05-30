import React from 'react';
import {shallow} from 'enzyme';
import {
  Button,
  TextLink,
} from './user-dropdown-styled';
import UserDropdown from './user-dropdown';

describe('UserDropdown', () => {
  it('should render', () => {
    const props = {
      user: {
        nickname: 'nickname',
        email: 'email',
        picture: 'picture',
      },
      logout: jest.fn(),
    };
    const wrapper = shallow(<UserDropdown {...props} />);
    expect(wrapper).not.toBeEmptyRender();
  });

  it('should handle on logount ', () => {
    const props = {
      user: {
        nickname: 'nickname',
        email: 'email',
        picture: 'picture',
      },
      logout: jest.fn(),
    };
    const wrapper = shallow(<UserDropdown {...props} />);
    wrapper.find(Button).simulate('click');
    expect(props.logout).toHaveBeenCalled();
  });

  it('should render profile link', () => {
    const props = {
      user: {
        nickname: 'nickname',
        email: 'email',
        picture: 'picture',
      },
      logout: jest.fn(),
    };
    const wrapper = shallow(<UserDropdown {...props} />);
    const actual = wrapper.find(TextLink).prop('to');
    const expected = '/profile';
    expect(actual).toEqual(expected);
  });
});
