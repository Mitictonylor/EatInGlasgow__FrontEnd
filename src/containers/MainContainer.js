import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavigationBar from '../NavigationBar.js';
import RestaurantContainer from './RestaurantContainer.js'

const MainContainer = () => {

    return (
      <Router>
      <Fragment>

      <NavigationBar/>
      <h1>WELCOME TO EatInGlasgow</h1>
      <Switch>
<Route path ='/restaurants' component = {RestaurantContainer}></Route>
      </Switch>


      </Fragment>
      </Router>
    )
}

export default MainContainer;
