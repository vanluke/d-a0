import 'babel-polyfill'; // eslint-disable-line
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {AppContainer} from 'react-hot-loader'; // eslint-disable-line
import {BrowserRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import {hydrateClientSide, getInitialState} from './middleware';
import routes from './routes';
import configureStore from './store';

const store = configureStore(getInitialState());

const render = () => hydrateClientSide(ReactDOM)(
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
  module.hot.accept('./root', () => render());
}

render();
