import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainNavigationBar from '../MainNavigationBar.js';
import MainRestaurantContainer from './MainRestaurantContainer.js';
import MainUserContainer from './MainUserContainer.js';



const MainContainer = () => {

const welcome= ""

if(window.location === "/"){
  welcome = "WELCOME TO EAT IN GLASGOW"
}


    return (
      <Router>
      <Fragment>

      <MainNavigationBar/>
      <div>
      
      {welcome}
      </div>
      <Switch>
        <Route path  ='/restaurants' component = {MainRestaurantContainer}></Route>
        <Route path ='/users' component = {MainUserContainer}/>

      </Switch>


      </Fragment>
      </Router>
    )
}

export default MainContainer;
