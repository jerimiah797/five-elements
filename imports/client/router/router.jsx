import React, {Component} from 'react';
import { Router, Route, Redirect, browserHistory, IndexRoute } from 'react-router';


import App from '../components/App.jsx';
import Landing from '../containers/Landing.jsx'
import Navbar from '../containers/Navbar.jsx'
import Body from '../containers/Body.jsx'
import NotFound from '../components/NotFound.jsx';

export default (
    <Route path="/" component={ App }>
      <IndexRoute loggedIn={false} components={{ landing: Landing, navbar: Navbar, body: Body }}></IndexRoute>
      <Redirect from="*" to="/" />
    </Route>
);
