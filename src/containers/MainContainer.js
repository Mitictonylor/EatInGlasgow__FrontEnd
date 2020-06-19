import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavigationBar from '../NavigationBar.js';


const MainContainer = () => {

    return (
      <Router>
      <Fragment>
      <NavigationBar/>
      <Switch>
      
      </Switch>


      </Fragment>
      </Router>
    )
}

export default MainContainer;
