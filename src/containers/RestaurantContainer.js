import React,{Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/request.js'

class RestaurantContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      restaurants:[{
                    name: "saffsasaf"
                  },
                  {
                    name: "jhafshoifsaohisfa"
                  }
      ]
    }
  }

render(){
  return(
    <Router>
        <Fragment>
          <Switch>
              <Route render={(props) => {
                return <RestaurantList restaurants={this.state.restaurants}/>
              }}/>
          </Switch>
        </Fragment>
      </Router>
  )
}





}
export default RestaurantContainer;
