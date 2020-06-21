import React,{Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/request.js'

import RestaurantForm from '../components/restaurants/RestaurantForm.js'
import RestaurantLogin from '../components/restaurants/RestaurantLogin.js'
import RestaurantDetail from '../components/restaurants/RestaurantDetail.js'

class MainRestaurantContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      restaurants:[]
    }

  this.findRestaurantById = this.findRestaurantById.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);


  }
componentDidMount(){
  const request = new Request();
  request.get('/api/restaurants').then(data => this.setState({restaurants: data}))
}

findRestaurantById(id){
  return this.state.restaurant.find((restaurant) => {
    return restaurant.id === parseInt(id);
  });
}

handleDelete(id){
  const request = new Request();
  const url = "/api/restaurants/" + id
  request.delete(url)
  .then(() => window.location = "/restaurants")
}

handlePost(restaurant){
  const request = new Request();
  request.post("/api/restaurants", restaurant)
  .then(() => window.location = '/restaurants')
}

handleUpdate(restaurant){
    const request = new Request();
    request.patch('/api/restaurants/' + restaurant.id, restaurant).then(() => {
      window.location = '/restaurants/' + restaurant.id
    })
  }
handleSubmit(restaurantLogged){
  const loggedRestaurant =  this.state.restaurant.find((restaurant) => {
    return restaurant.email === restaurantLogged.email;})

    this.setState({loggedRestaurant: loggedRestaurant})
    const request = new Request();
    window.location = `/restaurants/${loggedRestaurant.id}`;
    request.get(`/api/reviews?restaurant_id=${this.loggedRestaurant.id}`)
    .then(data => this.setState({reviews: data}))
}





render(){

if(!this.state.restaurants){
  return null
}



  return(
    <Router>
      <Fragment>
      <a className = "link" href="/restaurants/new" >ReGIster</a>
      <a className = "link" href="/restaurants/login" >Login</a>
          <Switch>

            <Route exact path="/restaurants/new" render={(props) => {
              return <RestaurantForm onCreate={this.handlePost}/>
              }} />

              <Route exact path="/restaurants/login" render={(props) => {
                return <RestaurantLogin onLogin={this.handleSubmit}/>
                }} />

                <Route exact path="/restaurants/:id" render={(props) =>{
                    const id = props.match.params.id;
                    const restaurant = this.findRestaurantById(id);
                    return <RestaurantDetail restaurant={restaurant}
                    onDelete={this.handleDelete}
                    onUpdate={this.handleUpdate}
                    reviews={this.getReviews}
                    />
                  }}/>


          </Switch>



        </Fragment>
      </Router>
  )
}





}
export default MainRestaurantContainer;
