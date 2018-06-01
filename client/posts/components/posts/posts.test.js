import React from 'react';
import {shallow, mount} from 'enzyme';
import {
  List,
  ListItem,
} from './posts-styled';
import Post from '../card';
import Posts from './posts';

describe('Posts', () => {
  const props = {
    posts: [{
      id: '1',
      author: 'author',
      tags: 'tags',
      balanceTo: 'balanceTo',
      image: 'image',
      title: 'title',
      name: 'name',
      makes: 'makes',
      phone: 'phone',
      location: {
        latitude: 1,
        longitude: 2,
      },
      about: 'about',
      description: 'description',
      email: 'email@email.com',
      registered: 'Wed May 30 2018 10:12:56 GMT+0200 (CEST)',
    }],
    isLoading: false,
  };
  it('should render', () => {
    const wrapper = shallow(<Posts {...props} />);
    expect(wrapper).not.toBeEmptyRender();
  });
  it('should render List', () => {
    const wrapper = mount(<Posts {...props} />);
    const actual = wrapper.find(List);
    expect(actual).toHaveLength(1);
  });
  it('should render ListItem', () => {
    const wrapper = mount(<Posts {...props} />);
    const actual = wrapper.find(ListItem);
    expect(actual).toHaveLength(1);
  });
  it('should render Post', () => {
    const wrapper = mount(<Posts {...props} />);
    const actual = wrapper.find(Post);
    expect(actual).toHaveLength(1);
  });
  it('should render spinner', () => {
    const spinnerProps = {
      ...props,
      isLoading: true,
    };
    const wrapper = shallow(<Posts {...spinnerProps} />);
    const actual = wrapper.name();
    expect(actual).toEqual('renderComponent(Spinner)');
  });
});
