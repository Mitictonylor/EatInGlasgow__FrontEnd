import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainRestaurantContainer from './MainRestaurantContainer.js';
import MainUserContainer from './MainUserContainer.js';
import Welcome from "../components/Welcome.js"


const MainContainer = () => {






    return (
      <Router>
      <Fragment>
        <Welcome/>
      <Switch>
        <Route exact path  ='/restaurants/' component = {MainRestaurantContainer}></Route>
        <Route exact path ='/users/' component = {MainUserContainer}/>

      </Switch>


      </Fragment>
      </Router>
    )
}

export default MainContainer;
