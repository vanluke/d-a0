import React from 'react';
import {shallow, mount} from 'enzyme';
import {
  Number,
  Author,
  About,
  Title,
  Balance,
  Makes,
  Description,
  Phone,
  Email,
  Tags,
  Image,
} from './details-styled';
import Post from './details';

describe('Post Details', () => {
  const props = {
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
  };
  it('should render', () => {
    const wrapper = shallow(<Post {...props}/>);
    expect(wrapper).not.toBeEmptyRender();
  });
  it('should render Image', () => {
    const wrapper = mount(<Post {...props} />);
    const actual = wrapper.find(Image).prop('src');
    const expected = props.image;
    expect(expected).toEqual(actual);
  });
  it('should render Title', () => {
    const wrapper = mount(<Post {...props} />);
    const actual = wrapper.find(Title).text();
    const expected = props.title;
    expect(expected).toEqual(actual);
  });
  it('should render Phone', () => {
    const wrapper = mount(<Post {...props} />);
    const actual = wrapper.find(Phone).text();
    const expected = props.phone;
    expect(expected).toEqual(actual);
  });
  it('should render Email', () => {
    const wrapper = mount(<Post {...props} />);
    const actual = wrapper.find(Email).text();
    const expected = props.email;
    expect(expected).toEqual(actual);
  });
  it('should render About', () => {
    const wrapper = mount(<Post {...props} />);
    const actual = wrapper.find(About).text();
    const expected = props.about;
    expect(expected).toEqual(actual);
  });
  it('should render Balance to', () => {
    const wrapper = mount(<Post {...props} />);
    const actual = wrapper.find(Balance).text();
    const expected = props.balanceTo;
    expect(expected).toEqual(actual);
  });
  it('should render Makes', () => {
    const wrapper = mount(<Post {...props} />);
    const actual = wrapper.find(Makes).text();
    const expected = props.makes;
    expect(expected).toEqual(actual);
  });
  it('should render Description', () => {
    const wrapper = mount(<Post {...props} />);
    const actual = wrapper.find(Description).text();
    const expected = props.description;
    expect(expected).toEqual(actual);
  });
  it('should render Title', () => {
    const wrapper = mount(<Post {...props} />);
    const actual = wrapper.find(Title).text();
    const expected = props.title;
    expect(expected).toEqual(actual);
  });
  it('should render Number', () => {
    const wrapper = mount(<Post {...props} />);
    const actual = wrapper.find(Number).prop('date');
    const expected = props.registered;
    expect(expected).toEqual(actual);
  });
  it('should render Author', () => {
    const wrapper = mount(<Post {...props} />);
    const actual = wrapper.find(Author).text();
    const expected = props.author;
    expect(expected).toEqual(actual);
  });
  it('should render Tags', () => {
    const wrapper = mount(<Post {...props} />);
    const actual = wrapper.find(Tags).text();
    const expected = props.tags;
    expect(expected).toEqual(actual);
  });
  it('should render Tags', () => {
    const wrapper = mount(<Post {...props} />);
    const actual = wrapper.find(Tags).text();
    const expected = props.tags;
    expect(expected).toEqual(actual);
  });
  it('should render Spinner', () => {
    const spinnerProps = {...props, isLoading: true};
    const wrapper = shallow(<Post {...spinnerProps} />);
    expect(wrapper.name()).toEqual('renderComponent(Spinner)');
  });
});
