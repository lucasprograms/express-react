import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Post from './Post';
import Posts from './Posts';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/posts/" component={Posts} />
      <Route path="/posts/:number" component={Post} />
    </Switch>
  </main>
);

export default Main;
