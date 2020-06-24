import React,{Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import Request from '../helpers/request.js'
import ReviewList from '../components/reviews/ReviewList.js'
import RestaurantForm from '../components/restaurants/RestaurantForm.js'
import RestaurantLogin from '../components/restaurants/RestaurantLogin.js'
import RestaurantDetail from '../components/restaurants/RestaurantDetail.js'

class MainRestaurantContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      restaurants:[],
      loggedRestaurant:{email:"",
                        password:""
                      }

    }

  this.findRestaurantById = this.findRestaurantById.bind(this);
  this.restHandleSubmit = this.restHandleSubmit.bind(this);


  }
componentDidMount(){
  const request = new Request();
  request.get('/api/restaurants').then(data => this.setState({restaurants: data}))
}

findRestaurantById(id){
  return this.state.restaurants.find((restaurant) => {
    return restaurant.id === parseInt(id);
  });
}

restHandleDelete(id){
  const request = new Request();
  const url = "/api/restaurants/" + id
  request.delete(url)
  .then(() => window.location = "/restaurants")
}

restHandlePost(restaurant){
  const request = new Request();
  request.post("/api/restaurants", restaurant)
  .then(() => window.location = '/restaurants')
}

restHandleUpdate(restaurant){
    const request = new Request();
    request.patch('/api/restaurants/' + restaurant.id, restaurant).then(() => {
      window.location = '/restaurants/' + restaurant.id
    })
  }
restHandleSubmit(restaurantLogged){
  const loggedRestaurant =  this.state.restaurants.find((restaurant) => {
    return restaurant.email === restaurantLogged.email;})

    this.setState({loggedRestaurant: loggedRestaurant})
    const request = new Request();
    window.location = `/restaurants/${loggedRestaurant.id}`;
}




render(){

if(!this.state.restaurants){
  return null
}



  return(
    <Router>
      <Fragment>

          <Switch>

            <Route exact path="/restaurants/new" render={(props) => {
              return <RestaurantForm restaurants = {this.state.restaurants} onCreate={this.restHandlePost}/>
              }} />

              <Route exact path="/restaurants/login" render={(props) => {
                return <RestaurantLogin restaurants = {this.state.restaurants} onLogin={this.restHandleSubmit}/>
                }} />

                <Route exact path="/restaurants/:id/edit" render={(props) =>{
                      const id = props.match.params.id
                      const restaurant = this.findRestaurantById(id);
                      return <RestaurantForm restaurant={restaurant}
                      onUpdate={this.restHandleUpdate}/>
                    }}/>

                <Route exact path="/restaurants/:id" render={(props) =>{
                    const id = props.match.params.id;
                    const restaurant = this.findRestaurantById(id);
                    return <RestaurantDetail restaurant={restaurant}
                    onDelete={this.restHandleDelete}
                    onUpdate={this.restHandleUpdate}
                    />
                  }}/>
                  <Route exact path="/restaurants/:id/reviews" render={(props) =>{
                      const id = props.match.params.id;
                      const restaurant = this.findRestaurantById(id);
                      return <ReviewList reviews={restaurant.reviews}/>
                    }}/>

          </Switch>



        </Fragment>
      </Router>
  )
}





}
export default MainRestaurantContainer;
