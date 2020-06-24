import React, {Component, Fragment} from 'react';

import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import history from './history'
import Welcome from "../components/Welcome.js"
import Request from '../helpers/request.js'
import ReviewList from '../components/reviews/ReviewList.js'
import RestaurantForm from '../components/restaurants/RestaurantForm.js'
import RestaurantLogin from '../components/restaurants/RestaurantLogin.js'
import RestaurantDetail from '../components/restaurants/RestaurantDetail.js'
import BookingList from '../components/bookings/BookingList.js';
import UserForm from '../components/users/UserForm.js'
import UserLogin from '../components/users/UserLogin.js'
import UserDetail from '../components/users/UserDetail.js'
import UserRestaurantMap from '../components/users/UserRestaurantMap.js'
import UserReviewForm from '../components/users/UserReviewForm.js'


class MainContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      users:[],
      restaurants:[],
      loggedUser: null,
      activeUser:null,
      loggedRestaurant:null


    }
  this.findRestaurantById = this.findRestaurantById.bind(this);
  this.findUserById = this.findUserById.bind(this)
  this.handleLogin = this.handleLogin.bind(this)
  this.restaurantWithCoordinates = this.restaurantWithCoordinates.bind(this)
  this.restHandleSubmit = this.restHandleSubmit.bind(this);
  }

componentDidMount(){
  const request = new Request();
  const userRequest = request.get("/api/users")
  const restarantRequest = request.get("/api/restaurants")
  Promise.all([userRequest, restarantRequest])
  .then((data) => this.setState({users: data[0],
                                restaurants: data[1]}))

}

findRestaurantById(id){
  return this.state.restaurants.find((restaurant) => {
    return restaurant.id === parseInt(id);
  });
}

findUserById(id){
  return this.state.users.find((user) => {
    return user.id === parseInt(id);
  });
}



handlePost(user){
  const request = new Request();
  request.post("/api/users", user)
  .then(() => window.location = '/users')
}

handleUpdate(user){
    const request = new Request();
    request.patch('/api/users/' + user.id, user).then(() => {
      window.location = '/users/' + user.id
    })
  }

  handlePostReview(review){
    const request = new Request();
    request.post("/api/reviews", review)
    .then(() => window.location = `/users/${review.user.id}`)
  }

handleLogin(userLogged){

   this.setState({loggedUser: userLogged})
  window.location = `/users/${userLogged.id}`
}


restHandleSubmit(restaurantLogged){
      this.setState({loggedRestaurant: restaurantLogged})
if(!this.state.loggedRestaurant){
    window.location = `/restaurants/${restaurantLogged.id}`;}
}


restaurantWithCoordinates(){
let restaurants = []
restaurants=[...this.state.restaurants]
if(restaurants.length > 19)
for(let restaurant of restaurants){
        let postcode = restaurant.postcode;
        const url = "https://api.postcodes.io/postcodes/"
        fetch(url + postcode).then(res => res.json())
          .then(restaurantData =>{
            if (restaurantData.result){
              restaurant.longitude= restaurantData.result.longitude;
              restaurant.latitude = restaurantData.result.latitude;
            }
          }
        )
      }
return restaurants

}



today(){
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth()+1; //As January is 0.
  let yyyy = today.getFullYear();

  if(dd<10) dd='0'+dd;
  if(mm<10) mm='0'+mm;
  return (yyyy+"-"+mm+"-"+dd);
};


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



render(){

if(this.state.users.lenghth < 15 && this.state.restaurants.length < 20){
  return null
}


console.log(this.state.loggedUser)

  return(
    <Router history={history}>
      <Fragment>
        <Welcome/>

          <Switch>

            <Route exact path="/users/new" render={(props) => {
              return <UserForm users = {this.state.users} onCreate={this.handlePost}/>
              }} />

              <Route exact path="/users/login" render={(props) => {
                return <UserLogin users={this.state.users} onLogin={this.handleLogin}/>
                }} />

                <Route exact path="/users/:id/edit" render={(props) =>{
                      const id = props.match.params.id
                      const user = this.findUserById(id);
                      return <UserForm user={user}
                      onUpdate={this.handleUpdate}/>
                    }}/>

                <Route exact path="/users/:id" render={(props) =>{
                    const id = props.match.params.id;
                    const user = this.findUserById(id);

                    return <UserDetail user={user}
                    onDelete={this.handleDelete}
                    onUpdate={this.handleUpdate}
                    restaurantsWithCoordinates={this.restaurantWithCoordinates()}
                    />
                  }}/>

                  <Route exact path="/users/:id/bookings" render={(props) =>{
                      const id = props.match.params.id;
                      const user = this.findUserById(id);
                      return <BookingList bookings={user.bookings}/>
                    }}/>

                    <Route exact path="/users/:id/reviews" render={(props) =>{
                        const id = props.match.params.id;
                        const user = this.findUserById(id);
                        return <ReviewList reviews={user.reviews}/>
                      }}/>
                      <Route exact path="/users/:id/map" render={(props) =>{
                        const id = props.match.params.id;
                        const user = this.findUserById(id);
                          return <UserRestaurantMap user={user} restaurantList={this.restaurantWithCoordinates()}/>
                        }}/>
                        <Route exact path="/users/:id/reviews/new" render={(props) =>{
                            const id = props.match.params.id;
                            const user = this.findUserById(id);
                            return <UserReviewForm
                            user={user}
                            restaurants={this.restaurantWithCoordinates()}
                            onCreateReview={this.handlePostReview}
                            todayDate={this.today()}
                            />
                          }}/>



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
export default MainContainer;
