import React from 'react';
import App from './App';
import { Router, Route, hashHistory } from 'react-router'

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
    </Router>
);
export default routes;