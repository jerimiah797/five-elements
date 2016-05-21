import React, {Component} from 'react';
import { Router, Route, Redirect, browserHistory, IndexRoute } from 'react-router';


import App from '../components/App.jsx';
import Landing from '../components/Landing.jsx'
import NotFound from '../components/NotFound.jsx';

export default (
    <Route path="/" component={ App }>
      <IndexRoute loggedIn={false} components={{ content: Landing }}></IndexRoute>
      <Redirect from="*" to="/" />
    </Route>
);
