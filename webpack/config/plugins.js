/* eslint-disable */
import webpack from 'webpack';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import autoprefixer from 'autoprefixer';
import StatsPlugin from 'stats-webpack-plugin';
import precss from 'precss';
/* eslint-enable */

export default function ({ENV, DEV, PROD}) {
  return [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['build'], {
      root: path.resolve(__dirname, '..'),
      verbose: true,
      dry: false,
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      options: {
        context: __dirname,
        postcss: [precss, autoprefixer],
      },
    }),
    new StatsPlugin('stats.json'),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      disable: false,
      allChunks: true,
    }),
  ];
}

export const ssPlugins = function ({ENV, DEV, PROD}) {
  return [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      disable: false,
      allChunks: true,
    }),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ];
};
