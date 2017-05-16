require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const fallback = require('express-history-api-fallback');
const MongoClient = require('mongodb').MongoClient;
const morgan = require('morgan');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const path = require('path');
const request = require('request');
const config = require('./webpack.config.js');

const port = process.env.PORT || 1337;
const root = path.resolve(__dirname, 'dist');
const app = express();

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
app.use(bodyParser.urlencoded({ extended: true }));

const mlabUser = process.env.MLAB_USER;
const mlabPassword = process.env.MLAB_PASSWORD;

const compiler = webpack(config);
const middleware = webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  contentBase: 'src',
  historyApiFallback: true,
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false,
  },
});

let db;

app.use(middleware);
app.use(webpackHotMiddleware(compiler));
app.use(express.static(root));

app.get('/api/posts', (req, res) => {
  request('https://jsonplaceholder.typicode.com/posts/', (error, response, body) => {
    res.send(body);
  });
});

app.get('/api/posts/*', (req, res) => {
  request(`https://jsonplaceholder.typicode.com/posts/${req.params[0]}`, (error, response, body) => {
    res.send(body);
  });
});

app.post('/api/posts/', (req, res) => {
  console.log(req.body);
  db.collection('posts').save(req.body, (err, result) => {
    if (err) return console.log(err); // eslint-disable-line
    res.send(result);
  });
});

app.use(fallback('index.html', { root }));

MongoClient.connect(`mongodb://${mlabUser}:${mlabPassword}@ds062889.mlab.com:62889/insta`, (err, database) => {
  if (err) return console.log(err); // eslint-disable-line
  db = database;
  app.listen(port, () => {
    console.log(`listening on ${port}`); // eslint-disable-line
  });

  return null;
});
