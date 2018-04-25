import React from 'react';
import PropTypes from 'prop-types';
import {Panels} from './tabs-styled';

const TabPanels = props => (
  <Panels>
    {props.children[props.activeIndex]}
  </Panels>
);

TabPanels.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  activeIndex: PropTypes.number,
};

TabPanels.defaultProps = {
  activeIndex: 0,
};

export default TabPanels;
