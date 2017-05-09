import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Post from './Post';
import Posts from './Posts';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/posts/" component={Posts} />
    <Route path="/posts/:number" component={Post} />
  </Switch>
);

export default App;
