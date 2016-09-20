import React from 'react';
import App from './App';
import Skaters from './components/Skaters';
import StatTypePrompt from './components/StatTypePrompt';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        
        <Route path="/(:section)(/:statType)(/:metric)" component={Skaters} >
            <IndexRoute component={StatTypePrompt} /> 
        </Route>
    </Router>
);
export default routes;