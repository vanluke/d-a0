import React from 'react';
import {ImageStream} from 'client/common/components/image-upload';
import ImageForm from './picture-with-state';

const initState = {
  file: '',
  preview: '',
};

const Image = ImageStream(initState);

export default () => (
  <Image
    render={props => (<ImageForm {...props} />)}
  />
);
