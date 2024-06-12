import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import Movie from './pages/Movie';

const routes = (
  <Router>
    <Route exact path="/" component={Home} />
    <Route path="/directors" component={Directors} />
    <Route path="/actors" component={Actors} />
    <Route path="/movie/:id" component={Movie} />
  </Router>
);

export default routes;
