import React from 'react';
import PropTypes from 'prop-types';
import {Error} from './error-styled';

const ErrorComponent = props => (<Error>{props.error}</Error>);

ErrorComponent.propTypes = {
  error: PropTypes.string,
};

ErrorComponent.defaultProps = {
  error: '',
};

export default ErrorComponent;
