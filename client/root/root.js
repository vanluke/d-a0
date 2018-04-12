import React from 'react';
import PropTypes from 'prop-types';
import {renderRoutes} from 'react-router-config';
import NavBar from 'client/nav-bar';
import Container from './root-styled';

const Root = ({route}) => (
  <Container>
    <NavBar />
    {renderRoutes(route.routes)}
  </Container>
);

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
