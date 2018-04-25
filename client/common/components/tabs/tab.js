import React from 'react';
import PropTypes from 'prop-types';
import {noop} from 'lodash';
import {Button} from './tabs-styled';

const Tab = props => (
  <Button
    onClick={props.disabled ? null : props.onClick}
    disabled={props.disabled}
    active={props.active}
  >
    {props.children}
  </Button>
);

Tab.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

Tab.defaultProps = {
  disabled: false,
  active: false,
  onClick: noop,
};

export default Tab;
