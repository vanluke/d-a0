/* eslint-disable */
import webpack from 'webpack';
import path from 'path';
import nodeExternals from 'webpack-node-externals';
import loaders, {serverCss} from './config/loaders';
import {ssPlugins} from './config/plugins';
/* eslint-enable */
const ENV = process.env.NODE_ENV || 'development';
const DEV = ENV === 'development';
const PROD = ENV === 'production';

const plugins = ssPlugins({
  ENV,
  DEV,
  PROD,
});

const serverConfig = {
  mode: PROD ? 'production' : 'development',
  name: 'server',
  devtool: 'inline-source-map',
  target: 'node',
  entry: [
    path.resolve(__dirname, '..', 'server/render.js'),
  ],
  output: {
    path: path.resolve(__dirname, '../build/server'),
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },

  resolve: {
    modules: [
      path.resolve(__dirname),
      'node_modules',
    ],
  },

  module: {
    rules: [...loaders, {...serverCss}],
  },
  plugins: [
    ...plugins,
  ],
  externals: [nodeExternals({
    whitelist: [/\.(?!(?:jsx?|json)$).{1,5}$/i],
  })],
};

module.exports = serverConfig;
