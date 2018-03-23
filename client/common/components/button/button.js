import React from 'react';
import PropTypes from 'prop-types';
import {Button as MaterialButton, Text} from './button-styled';

const Button = props => (
  <MaterialButton {...props}><Text>{props.children}</Text></MaterialButton>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Button.defaultProps = {
  children: '',
};

export default Button;
