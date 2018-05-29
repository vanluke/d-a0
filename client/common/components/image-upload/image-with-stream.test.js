import React from 'react';
import {shallow} from 'enzyme';
import withStream from './image-with-stream';

describe('Image with Stream', () => {
  const initState = {
    file: '',
    preview: '',
  };
  it('should render', () => {
    const Image = withStream(initState);
    const render = jest.fn();
    const wrapper = shallow(<Image
      render={render}
    />);
    expect(wrapper).toHaveLength(1);
  });

  it('should call render', () => {
    const Image = withStream(initState);
    const render = jest.fn();
    shallow(<Image
      render={render}
    />);
    expect(render).toHaveBeenCalled();
  });

  it('should create readFile handler', () => {
    const Image = withStream(initState);
    const render = jest.fn();
    shallow(<Image
      render={render}
    />);
    const actual = render.mock.calls[0][0];
    expect(Object.keys(actual)).toEqual(['file', 'preview', 'readFile']);
  });
});
