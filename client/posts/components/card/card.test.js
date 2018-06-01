import React from 'react';
import {shallow, mount} from 'enzyme';
import {
  Number as N,
  Author,
  Title,
  About,
  Tags,
  Image,
  Button,
  Makes,
} from './card-styled';
import Card from './card';

describe('Card', () => {
  it('should render', () => {
    const props = {
      image: 'image',
      registered: 'Wed May 30 2018 10:12:56 GMT+0200 (CEST)',
      author: 'author',
      title: 'title',
      about: 'about',
      tags: 'tag1, tag2',
      makes: 'make1, make1',
    };
    const wrapper = shallow(<Card {...props} />);
    expect(wrapper).not.toBeEmptyRender();
  });
  it('should render button', () => {
    const props = {
      image: 'image',
      registered: 'Wed May 30 2018 10:12:56 GMT+0200 (CEST)',
      author: 'author',
      title: 'title',
      about: 'about',
      tags: 'tag1, tag2',
      makes: 'make1, make1',
    };
    const wrapper = shallow(<Card {...props} />);
    expect(wrapper.find(Button)).toHaveLength(1);
  });
  it('should render Number', () => {
    const props = {
      image: 'image',
      registered: 'Wed May 30 2018 10:12:56 GMT+0200 (CEST)',
      author: 'author',
      title: 'title',
      about: 'about',
      tags: 'tag1, tag2',
      makes: 'make1, make1',
    };
    const wrapper = mount(<Card {...props} />);
    const actual = wrapper.find(N).prop('date');
    const expected = props.registered;
    expect(expected).toEqual(actual);
  });
  it('should render Title', () => {
    const props = {
      image: 'image',
      registered: 'Wed May 30 2018 10:12:56 GMT+0200 (CEST)',
      author: 'author',
      title: 'title',
      about: 'about',
      tags: 'tag1, tag2',
      makes: 'make1, make1',
    };
    const wrapper = mount(<Card {...props} />);
    const actual = wrapper.find(Title).text();
    const expected = props.title;
    expect(expected).toEqual(actual);
  });
  it('should render Author', () => {
    const props = {
      image: 'image',
      registered: 'Wed May 30 2018 10:12:56 GMT+0200 (CEST)',
      author: 'author',
      title: 'title',
      about: 'about',
      tags: 'tag1, tag2',
      makes: 'make1, make1',
    };
    const wrapper = mount(<Card {...props} />);
    const actual = wrapper.find(Author).text();
    const expected = props.author;
    expect(expected).toEqual(actual);
  });
  it('should render About', () => {
    const props = {
      image: 'image',
      registered: 'Wed May 30 2018 10:12:56 GMT+0200 (CEST)',
      author: 'author',
      title: 'title',
      about: 'about',
      tags: 'tag1, tag2',
      makes: 'make1, make1',
    };
    const wrapper = mount(<Card {...props} />);
    const actual = wrapper.find(About).text();
    const expected = props.about;
    expect(expected).toEqual(actual);
  });
  it('should render Tags', () => {
    const props = {
      image: 'image',
      registered: 'Wed May 30 2018 10:12:56 GMT+0200 (CEST)',
      author: 'author',
      title: 'title',
      about: 'about',
      tags: 'tag1, tag2',
      makes: 'make1, make1',
    };
    const wrapper = mount(<Card {...props} />);
    const actual = wrapper.find(Tags).text();
    const expected = props.tags;
    expect(expected).toEqual(actual);
  });
  it('should render Makes', () => {
    const props = {
      image: 'image',
      registered: 'Wed May 30 2018 10:12:56 GMT+0200 (CEST)',
      author: 'author',
      title: 'title',
      about: 'about',
      tags: 'tag1, tag2',
      makes: 'make1, make1',
    };
    const wrapper = mount(<Card {...props} />);
    const actual = wrapper.find(Makes).text();
    const expected = props.makes;
    expect(expected).toEqual(actual);
  });
  it('should render Image', () => {
    const props = {
      image: 'image',
      registered: 'Wed May 30 2018 10:12:56 GMT+0200 (CEST)',
      author: 'author',
      title: 'title',
      about: 'about',
      tags: 'tag1, tag2',
      makes: 'make1, make1',
    };
    const wrapper = mount(<Card {...props} />);
    const actual = wrapper.find(Image).prop('src');
    const expected = props.image;
    expect(expected).toEqual(actual);
  });
});
