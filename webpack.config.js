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
    path.resolve(__dirname, 'src', 'js', 'index.jsx'),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '--express-react.js',
    publicPath: '/',
    sourceMapFilename: '--express-react.map',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      styles: path.resolve(__dirname, 'src', 'styles'),
    },
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
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader',
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader',
      },
      {
        test: /\.sass$/,
        loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader?sourceMap=true',
      },
    ],
  },
};
