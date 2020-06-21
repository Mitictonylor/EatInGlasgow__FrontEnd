import React,{Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/request.js'

import UserForm from '../components/users/UserForm.js'
import UserLogin from '../components/users/UserLogin.js'
import UserDetail from '../components/users/UserDetail.js'

class MainUserContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      users:[],
      restaurants:[]
    }

  this.findUserById = this.findUserById.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
  this.restRequest = this.restRequest.bind(this)

  }
componentDidMount(){
  const request = new Request();
request.get('/api/users').then(data => this.setState({users: data}))
  this.restRequest()

}

async restRequest (){
  const response = await fetch('/api/restaurants');
    const restaurants = await response.json();


    for(let restaurant of restaurants){
      let postcode = restaurant.postcode;
      const url = "https://api.postcodes.io/postcodes/"
      // const response = await fetch(url + postcode)
      // const restaurantData = await response.json();
      //
      //   restaurant.longitude= restaurantData.result.longitude;
      //   restaurant.latitude = restaurantData.result.latitude;

//OR

    //   fetch(url+postcode).then(res => res.json()).then((data) =>{
    //     restaurant["longitude"]= data.result.longitude;
    //     restaurant["latitude"] = data.result.latitude;})
    // }

this.setState({restaurants: restaurants})
}
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




render(){

if(!this.state.users){
  return null
}



  return(
    <Router>
      <Fragment>
      <a className = "link" href="/users/new" >ReGIster</a>
      <a className = "link" href="/users/login" >Login</a>
          <Switch>

            <Route exact path="/users/new" render={(props) => {
              return <UserForm onCreate={this.handlePost}/>
              }} />

              <Route exact path="/users/login" render={(props) => {
                return <UserLogin onLogin={this.handleSubmit}/>
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
