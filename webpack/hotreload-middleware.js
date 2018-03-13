/* eslint-disable */
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackServerHotMiddleware from 'webpack-server-middleware';
/* eslint-enable */
const webpackconfig = require('../webpack.config.js');
const clientConfig = require('./webpack.client');
const serverConfig = require('./webpack.server');

function useWebpackMiddleware(app) {
  const compiler = webpack(webpackconfig);
  const options = {
    serverSideRender: true,
    hot: true,
    stats: {
      colors: true,
    },
    historyApiFallback: true,
  };
  app.use(webpackDevMiddleware(compiler, options));
  app.use(webpackHotMiddleware(compiler.compilers.find(c => c.name === 'client')));
  app.use(webpackServerHotMiddleware(compiler));
}

module.exports = {
  useWebpackMiddleware,
};
