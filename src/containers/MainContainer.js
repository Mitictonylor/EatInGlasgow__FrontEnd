import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavigationBar from '../NavigationBar.js';
import RestaurantContainer from './RestaurantContainer.js'
import UserContainer from './UserContainer.js'
import BookingContainer from './BookingContainer.js'




const MainContainer = () => {

    return (
      <Router>
      <Fragment>

      <NavigationBar/>
      <Switch>
        <Route path ='/restaurants' component = {RestaurantContainer}></Route>
        <Route path ='/users' component = {UserContainer}></Route>
        <Route path ='/bookings' component = {BookingContainer}></Route>
      </Switch>


      </Fragment>
      </Router>
    )
}

export default MainContainer;
