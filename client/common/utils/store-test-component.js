import React from 'react';
import PropTypes from 'prop-types';
import {MemoryRouter} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

export const defaultStore = createStore(() => ({}));

const Container = ({children, store}) => (
  <MemoryRouter>
    <Provider store={store || defaultStore}>
      {children}
    </Provider>
  </MemoryRouter>
);

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  store: PropTypes.shape({}),
};

Container.defaultProps = {
  store: undefined,
};

export default Container;
