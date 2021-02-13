import React, { Component } from 'react';
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import Login from './AuthenticationComponents/Login';
import Register from './AuthenticationComponents/Register';
import Home from "./Home";
import AppHome from "./AppHome";

class Navigation extends Component {
    
    render() {
        return (
            <Router>


               <Switch>
               
               <Route path="/login" component={Login} />
               <Route path="/register" component={Register} />
               <Route path="/apphome" component={AppHome} />
               <Route path="/" exact component={Home} />

               </Switch>

            </Router>
        )
    }
}


export default Navigation;