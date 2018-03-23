import React from 'react';
import {renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';
import {StaticRouter} from 'react-router';
import {AppContainer} from 'react-hot-loader'; //eslint-disable-line
import {ServerStyleSheet} from 'styled-components';
import {renderRoutes} from 'react-router-config';
import {rehydrateStyles} from '../helpers';

const render = ({
  req,
  context,
  routes,
  store,
}) => {
  const sheet = new ServerStyleSheet();
  const app = sheet.collectStyles(<Provider store={store}>
    <StaticRouter
      location={req && req.url}
      context={context}
    >
      {renderRoutes(routes)}
    </StaticRouter>
  </Provider>); // eslint-disable-line

  return {
    sheet: rehydrateStyles(sheet),
    content: renderToString(app),
  };
};

export default render;
