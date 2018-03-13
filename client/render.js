import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {AppContainer} from 'react-hot-loader'; //eslint-disable-line
import {BrowserRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import routes from './routes';
import configureStore from './store';

const store = configureStore(window.__INITIAL_STATE__)

const hydrateClientSide = ReactDOM[!!module.hot ? 'render' : 'hydrate'];

const render = () => hydrateClientSide(
  <AppContainer>
    <Provider store={store}>
        <BrowserRouter>
          {renderRoutes(routes)}
        </BrowserRouter>
    </Provider>
  </AppContainer>,
  document.getElementById('app'),
);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./root', () => {
    console.info('HMR, updates');
    return render();
  });
}

render();
