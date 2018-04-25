import React, {Children, cloneElement} from 'react';
import {noop} from 'lodash';
import PropTypes from 'prop-types';
import {List} from './tabs-styled';

const TabList = ({children, activeIndex, onActivate}) => (
  <List>
    {Children.map(children, (child, index) =>
      cloneElement(child, {
        active: index === activeIndex,
        disabled: false,
        onClick: () => onActivate(index),
      }))}
  </List>
);

TabList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  onActivate: PropTypes.func,
  activeIndex: PropTypes.number,
};

TabList.defaultProps = {
  onActivate: noop,
  activeIndex: 0,
};

export default TabList;
