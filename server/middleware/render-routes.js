import React from 'react';
import {renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';
import {StaticRouter} from 'react-router';
import {AppContainer} from 'react-hot-loader'; //eslint-disable-line
import {ServerStyleSheet} from 'styled-components';
import {renderRoutes} from 'react-router-config';

const render = ({
  req,
  context,
  routes,
  store,
}) => {
  const sheet = new ServerStyleSheet();
  return {
    sheet,
    content: renderToString(
      <Provider store={store}>
        <StaticRouter
          location={req && req.url}
          context={context}
        >
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>),
  };
};

export default render;
