const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  context: path.resolve(__dirname),
  entry: [
    'babel-regenerator-runtime',
    'webpack-hot-middleware/client?reload=true',
    'bootstrap-loader',
    path.resolve(__dirname, 'src', 'index.jsx'),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '--express-react.js',
    publicPath: '/',
    sourceMapFilename: '--express-react.map',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'react-hot-loader/webpack',
        }, {
          loader: 'babel-loader',
          options: { presets: [['es2015', { modules: false }], 'stage-0', 'react'] },
        }],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
      },
    ],
  },
};
