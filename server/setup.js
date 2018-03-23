import express from 'express';
import path from 'path';
import webpackConfig from '../webpack.config';

export default (app) => {
  const clientConfig = webpackConfig.find(cnf => cnf.name === 'client');
  const {publicPath} = clientConfig.output;
  const outputPath = clientConfig.output.path;
  const clientStats = require(path.resolve(__dirname, '..', 'build/stats.json')); // eslint-disable-line
  const serverRender = require(path.resolve(__dirname, '..', 'build/server/server.js')).default;  // eslint-disable-line

  app.use(publicPath, express.static(outputPath));
  app.use(serverRender({clientStats, outputPath}));
};
