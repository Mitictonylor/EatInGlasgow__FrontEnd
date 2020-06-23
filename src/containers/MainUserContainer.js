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
  this.restRequest = this.restRequest.bind(this)
  this.renderLoginButtons = this.renderLoginButtons.bind(this)

  }
componentDidMount(){
  const request = new Request();
request.get('/api/users').then(data => this.setState({users: data}))
  this.restRequest()

}

async restRequest (){
  let allRest
   fetch('/api/restaurants').then(res => res.json())
   .then(restaurants => {
allRest= restaurants
      for(let restaurant of allRest){
        let postcode = restaurant.postcode;
        const url = "https://api.postcodes.io/postcodes/"
        fetch(url + postcode).then(res => res.json())
          .then(restaurantData =>{
            if (restaurantData.result){
              restaurant.longitude= restaurantData.result.longitude;
              restaurant.latitude = restaurantData.result.latitude;
              console.log("ID in the loop", restaurant.id)
            }
          }
        )
      }
      console.log("all restaurants", allRest)
    this.setState({restaurants: allRest} )

  }
  )
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

renderLoginButtons(){
  if(this.state.loggedUser.password === ""){
    return(
    <>
    <Link to = "/users/new" className="link"> REGISTER</Link>
    <Link to = "/users/login" className="link"> LOGIN</Link>
    </>
  )
}}


render(){

if(!this.state.users && !this.state.restaurants){
  return null
}
console.log("Main User Container restaurants: " + this.state.restaurants)



  return(
    <Router>
      <Fragment>

        {this.renderLoginButtons()}
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
