import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainNavigationBar from '../MainNavigationBar.js';
import MainRestaurantContainer from './MainRestaurantContainer.js';
import MainUserContainer from './MainUserContainer.js';



const MainContainer = () => {

if (window.location === '/')


    return (
      <Router>
      <Fragment>

      <MainNavigationBar/>
      <Switch>
        <Route path  ='/restaurants' component = {MainRestaurantContainer}></Route>
        <Route path ='/users' component = {MainUserContainer}/>

      </Switch>


      </Fragment>
      </Router>
    )
}

export default MainContainer;
