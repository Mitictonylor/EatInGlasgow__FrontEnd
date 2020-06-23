import React,{Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Request from '../helpers/request.js'

import UserForm from '../components/users/UserForm.js'
import UserLogin from '../components/users/UserLogin.js'
import UserDetail from '../components/users/UserDetail.js'

class MainUserContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      users:[],
      restaurants:[],
      loggedUser: {email:"",
                  password:""
                }

    }

  this.findUserById = this.findUserById.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
  this.restaurantWithCoordinates = this.restaurantWithCoordinates.bind(this)
  this.renderLoginButtons = this.renderLoginButtons.bind(this)

  }

componentDidMount(){
  const request = new Request();
  const userRequest = request.get("/api/users")
  const restarantRequest = request.get("/api/restaurants")
  Promise.all([userRequest, restarantRequest])
  .then((data) => this.setState({users: data[0],
                                restaurants: data[1]}))

}

// const request = new Request();
// const url = "https://api.postcodes.io/postcodes/"
// const restaurantsPostcodeRequest = restaurants.map( restaurant => request.get(url + restaurant.postcode))
// Promise.all(restaurantPostcodeRequest).then((data) => { restaurant.longitude = data.result.longitude})




findUserById(id){
  return this.state.users.find((user) => {
    return user.id === parseInt(id);
  });
}

handleDelete(id){
  const request = new Request();
  const url = "/api/users/" + id
  request.delete(url)
  .then(() => window.location = "/users")
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
handleSubmit(userLogged){
  const loggedUser =  this.state.users.find((user) => {
    return user.email === userLogged.email;})
    this.setState({loggedUser: loggedUser})
    const request = new Request();
    request.get(`/api/users/${loggedUser.id}`).
    then(() => window.location = `/users/${loggedUser.id}`)
}

renderLoginButtons(){
  if(this.state.loggedUser.email === ""){
    return(
    <>
    <Link to = "/users/new" className="link"> REGISTER</Link>
    <Link to = "/users/login" className="link"> LOGIN</Link>
    </>
  )
}}

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


render(){




if(this.state.users.lenghth < 15 && this.state.restaurants.length < 20){
  return null
}


  console.log("Main user container restaurant state", this.state.restaurants);

  return(
    <Router>
      <Fragment>

        {this.renderLoginButtons()}
          <Switch>

            <Route exact path="/users/new" render={(props) => {
              return <UserForm users = {this.state.users} onCreate={this.handlePost}/>
              }} />

              <Route exact path="/users/login" render={(props) => {
                return <UserLogin users={this.state.users} onLogin={this.handleSubmit}/>
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

                    restaurants={this.restaurantWithCoordinates()}
                    />
                  }}/>


          </Switch>



        </Fragment>
      </Router>
  )
}





}
export default MainUserContainer;
