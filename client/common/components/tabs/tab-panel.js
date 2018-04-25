import React from 'react';
import PropTypes from 'prop-types';
import {Panel} from './tabs-styled';

const TabPanel = props => (
  <Panel>
    {props.children}
  </Panel>
);

TabPanel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default TabPanel;
