import React,{Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/request.js'
import RestaurantList from '../components/restaurants/RestaurantList.js'
import RestaurantForm from '../components/restaurants/RestaurantForm.js'
import { findRenderedDOMComponentWithTag } from 'react-dom/test-utils';

class RestaurantContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      restaurants:[{
                    name: "sapori",
                    url:"",
                    capacity: 50,
                    priceRange: 'medium',
                    cousine: "Italian",
                    discount:0,
                    email: "s@s.tt",
                    address: "address",
                    postcode: "Postcode",
                    city: "city",
                    openTime: 16,
                    closeTime: 22
                  },
                  {
                    name: "dissapori",
                    url:"",
                    capacity: 25,
                    priceRange: 'high',
                    cousine: "Scottish",
                    discount:5,
                    email: "b@b.bb",
                    address: "address",
                    postcode: "Postcode",
                    town: "city",
                    openTime: 11,
                    closeTime: 23

                  }
      ]
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addRestaurant = this.addRestaurant.bind(this);
  }
  addRestaurant(){
    return <RestaurantForm onSubmit={this.handleSubmit}/>
  }

  handleSubmit(data) {

      this.setState({   name: data.name,
                        url: data.url,
                        capacity: data.capacity,
                        priceRange: data.priceRange,
                        cousine: data.cousine,
                        discount:data.discount,
                        email: data.email,
                        address: data.address,
                        postcode: data.postcode,
                        town: data.town,
                        openTime: data.openTime,
                        closeTime: data.closeTime });
    }

render(){
  
  return(
    <Router>
        <Fragment>
        <a className = "link" href="/restaurants/new" onClick={this.addRestaurant}>ADD Restaurant</a>
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
