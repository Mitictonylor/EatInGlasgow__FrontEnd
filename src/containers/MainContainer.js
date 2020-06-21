import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainNavigationBar from '../MainNavigationBar.js';
import RestaurantContainer from './RestaurantContainer.js';
import UserContainer from './UserContainer.js';
import BookingContainer from './BookingContainer.js';
import ReviewContainer from './ReviewContainer.js';


const MainContainer = () => {

    return (
      <Router>
      <Fragment>

      <MainNavigationBar/>
      <Switch>
        <Route exact path  ='/restaurants' component = {RestaurantContainer}></Route>
        <Route path ='/users' component = {UserContainer}/>
        <Route exact path  ='/bookings' component = {BookingContainer}></Route>
        <Route exact path  ='/reviews' component = {ReviewContainer} />

      </Switch>


      </Fragment>
      </Router>
    )
}

export default MainContainer;
