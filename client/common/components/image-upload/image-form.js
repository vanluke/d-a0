import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Input,
  Button,
  Img,
} from './image-form-styled';

const ImageForm = ({handleSubmit, handleImageChange, preview}) => (
  <Fragment>
    <Form onSubmit={handleSubmit}>
      <Input type="file" onChange={handleImageChange} />
      <Button type="submit">Upload Image</Button>
    </Form>
    {preview && <Img src={preview} alt="Image preview " />}
  </Fragment>
);

ImageForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleImageChange: PropTypes.func.isRequired,
  preview: PropTypes.string,
};

ImageForm.defaultProps = {
  preview: '',
};

export default ImageForm;
