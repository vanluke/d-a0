/* eslint-disable */
import webpack from 'webpack';
import path from 'path';
import nodeExternals from 'webpack-node-externals';
import getPlugins from './config/plugins';
import loaders, {serverCss} from './config/loaders';
/* eslint-enable */

const ENV = process.env.NODE_ENV || 'development';
const DEV = ENV === 'development';
const PROD = ENV === 'production';

const plugins = getPlugins({
  ENV,
  DEV,
  PROD,
});

const clientEntry = path.resolve(__dirname, '..', 'client/render.js');

const entry = {
  polyfills: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?reload=true&name=client',
    'babel-polyfill',
  ],
  vendor: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?reload=true&name=client',
    'react',
    'react-dom',
    'react-router',
    'react-router-config',
    'react-router-dom',
    'prop-types',
    'rxjs',
    'styled-components',
    'seamless-immutable',
    'redux0-helpers',
    'redux-observable',
    'redux-logger',
  ],
  main: DEV
    ? [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?reload=true&name=client',
      clientEntry,
    ]
    : [
      clientEntry,
    ],
};


const clientConfig = {
  mode: PROD ? 'production' : 'development',
  name: 'client',
  target: 'web',
  optimization: {
    minimize: PROD,
    runtimeChunk: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          enforce: true,
          chunks: 'initial',
          name: 'vendor',
        },
        main: {
          chunks: 'initial',
          name: 'main',
          enforce: true,
        },
        manifest: {
          chunks: 'initial',
          name: 'manifest',
          enforce: true,
        },
      },
    },
  },
  entry,
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    publicPath: '/',
    filename: '[name].[hash].js',
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js',
  },
  module: {
    rules: loaders,
  },

  resolve: {
    modules: [
      path.resolve(__dirname, '..'),
      'node_modules',
    ],
  },

  plugins: [
    ...plugins,
  ],
};

module.exports = clientConfig;
