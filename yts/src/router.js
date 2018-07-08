import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './containers/Home';
import MovieDetail from './containers/MovieDetail';
import MovieSuggestion from './containers/MovieSuggestion';

const RouterConfig = () =>(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/movie_detail" component={MovieDetail} />
      <Route path="movie_suggestion" component={MovieSuggestion} />
    </Switch>
  </Router>
)

export default RouterConfig;
