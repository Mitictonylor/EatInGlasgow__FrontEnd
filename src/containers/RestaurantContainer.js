import React,{Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/request.js'
import RestaurantList from '../components/restaurants/RestaurantList.js'

class RestaurantContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      restaurants:[{
                    name: "sapori"
                  },
                  {
                    name: "dissapori"
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
