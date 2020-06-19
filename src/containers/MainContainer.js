import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavigationBar from '../NavigationBar.js';
import RestaurantContainer from './RestaurantContainer.js';
import UserContainer from './UserContainer.js';
import BookingContainer from './BookingContainer.js';
import ReviewContainer from './ReviewContainer.js';
import UserForm from '../components/users/UserForm.js'


const MainContainer = () => {

    return (
      <Router>
      <Fragment>

      <NavigationBar/>
      <Switch>
        <Route exact path  ='/restaurants' component = {RestaurantContainer}></Route>
        <Route exact path ='/users' component = {UserContainer}/>
        <Route exact path  ='/bookings' component = {BookingContainer}></Route>
        <Route exact path  ='/reviews' component = {ReviewContainer} />
        <Route exact path  ='/users/new' component = {UserForm}>Add User</Route>
      </Switch>


      </Fragment>
      </Router>
    )
}

export default MainContainer;
