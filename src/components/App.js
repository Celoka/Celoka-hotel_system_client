import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { history } from '../helpers/history';
import { Register } from './landing/Register';
import { PrivateRoute } from '../components/PrivateRoute';
import { Login } from './landing/Login';
import LandingPage from './landing/LandingPage';
import SearchBar from './dashboard/SearchBar';
import PageNotFound from './PageNotFound';


const App = () => (
    <Router history={history}>
        <Switch>
            <Route exact path= "/" component={LandingPage}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <PrivateRoute path="/search" component={SearchBar}/>
            <Route component={PageNotFound}/>
        </Switch>
    </Router>
)
export default App;
