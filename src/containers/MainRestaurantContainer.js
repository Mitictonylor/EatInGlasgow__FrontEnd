import React,{Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/request.js'

import RestaurantForm from '../components/restaurants/RestaurantForm.js'
import UserLogin from '../components/users/UserLogin.js'
import UserDetail from '../components/users/UserDetail.js'

class MainRestaurantContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      restaurants:[]
    }

  this.findRestaurantById = this.findRestaurantById.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)

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
    request.get(`/api/restaurants/${loggedResaurant.id}`)
    .then(() => window.location = `/restaurants/${loggedResaurant.id}`)
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

              <Route exact path="/users/login" render={(props) => {
                return <UserLogin onLogin={this.handleSubmit}/>
                }} />

                <Route exact path="/users/:id" render={(props) =>{
                    const id = props.match.params.id;
                    const user = this.findUserById(id);
                    return <UserDetail user={user}
                    onDelete={this.handleDelete}
                    onUpdate={this.handleUpdate}
                    restaurants={this.state.restaurants}
                    />
                  }}/>


          </Switch>



        </Fragment>
      </Router>
  )
}





}
export default MainUserContainer;
