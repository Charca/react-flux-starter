import React from 'react';
import Router from 'react-router';

import App from './app';
import Home from './home';
import About from './about';

const Route = Router.Route;
const DefaultRoute = Router.DefaultRoute;

const routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="about" handler={About}/>
    <DefaultRoute handler={Home}/>
  </Route>
);

export default routes;
