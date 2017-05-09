const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  context: path.resolve(__dirname),
  entry: [
    'babel-regenerator-runtime',
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, 'src', 'index.jsx'),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '--poop-app.js',
    publicPath: '/',
    sourceMapFilename: '--poop-app.map',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
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
    ],
  },
};
