import React from 'react';
import PropTypes from 'prop-types';
import {renderRoutes} from 'react-router-config';

const Root = ({route}) => (<main>{renderRoutes(route.routes)}</main>);

Root.propTypes = {
  route: PropTypes.shape({
    routes: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string,
      exact: PropTypes.bool,
      component: PropTypes.func,
      fetchData: PropTypes.func,
    })),
  }).isRequired,
};

export default Root;
