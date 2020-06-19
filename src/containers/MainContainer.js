import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';


const MainContainer = () => {

    return (
      <Router>
      <Fragment>
      <NavBar/>
      <Switch>
        // <Route path = "/pirates" component={PirateContainer} />
      </Switch>


      </Fragment>
      </Router>
    )
}

export default MainContainer;
