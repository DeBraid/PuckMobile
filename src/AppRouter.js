import React from 'react';
import App from './App';
import Skaters from './components/Skaters';
import { Router, Route, hashHistory } from 'react-router'

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/skaters(/:statType)(/:metric)" component={Skaters}/>
    </Router>
);
export default routes;