import React from 'react';
import {shallow} from 'enzyme';
import ImageForm from './image-form';
import {
  Form,
  Input,
  Button,
  Img,
} from './image-form-styled';

describe('Image Upload', () => {
  it('should render', () => {
    const props = {
      handleSubmit: jest.fn(),
      handleImageChange: jest.fn(),
    };
    const wrapper = shallow(<ImageForm {...props} />);
    expect(wrapper).toHaveLength(1);
  });
  it('should render Form', () => {
    const props = {
      handleSubmit: jest.fn(),
      handleImageChange: jest.fn(),
    };
    const wrapper = shallow(<ImageForm {...props} />);
    const actual = wrapper.find(Form);
    expect(actual).toHaveLength(1);
  });
  it('should render Input', () => {
    const props = {
      handleSubmit: jest.fn(),
      handleImageChange: jest.fn(),
    };
    const wrapper = shallow(<ImageForm {...props} />);
    const actual = wrapper.find(Input);
    expect(actual).toHaveLength(1);
  });
  it('should render Button', () => {
    const props = {
      handleSubmit: jest.fn(),
      handleImageChange: jest.fn(),
    };
    const wrapper = shallow(<ImageForm {...props} />);
    const actual = wrapper.find(Button);
    expect(actual).toHaveLength(1);
  });
  it('should render preview', () => {
    const props = {
      handleSubmit: jest.fn(),
      handleImageChange: jest.fn(),
      preview: 'http://via.placeholder.com/350x150',
    };
    const wrapper = shallow(<ImageForm {...props} />);
    const {src} = wrapper.find(Img).props('src');
    expect(src).toEqual(props.preview);
  });
});
