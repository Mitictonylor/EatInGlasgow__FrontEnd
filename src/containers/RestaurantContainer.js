import React,{Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/request.js'

class RestaurantContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      restaurants:[]
    }
  }

render(){
  return(
  <Router>
      <Fragment>
        <Switch>
            <ul className = "component-list">
              <li className="component-item">
                <div className="component">STAKOKKIE </div>
              </li>
            </ul>

        </Switch>
      </Fragment>
    </Router>
  )
}





}
export default RestaurantContainer;
