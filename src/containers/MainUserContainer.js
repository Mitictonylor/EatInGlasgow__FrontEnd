import React,{Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/request.js'
import UserContainer from './UserContainer.js'


class MainUserContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      users:[]
    }

  this.findUserById = this.findUserById.bind(this)

  }
componentDidMount(){
  const request = new Request();

  request.get('/api/users').then((data)=> this.setState({users: data}))
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
                return <UserLogin onsubmit={this.handleSubmit}/>
                }} />


          </Switch>



        </Fragment>
      </Router>
  )
}





}
export default UserContainer;
