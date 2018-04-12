import React from 'react';
import PropTypes from 'prop-types';
import {LoginButton} from './login-button-styled';

const Button = ({onClick, ...rest}) => (
  <LoginButton onClick={() => onClick(rest)}>Login</LoginButton>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
