import React,{Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/request.js'
import UserList from '../components/users/UserList.js'
import UserForm from '../components/users/UserForm.js'


class UserContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      users:[]
    }
  this.handleSubmit = this.handleSubmit.bind(this);
  }
componentDidMount(){
  const request = new Request();
  request.get('/api/pirates').then((data)=> this.setState({users: data)})
}


  handleSubmit(data) {
const newData = {   name: data.name,
                  surname: data.surname,
                  email: data.email,
                  town: data.town,
                  postcode: data.postcode }
      this.setState([...this.state.users, newData ]);
    }

render(){
  return(
    <Router>
        <Fragment>
        <a className = "link" href="/users/new" onClick={this.addUser}>ADD USER</a>

          <Switch>
              <Route render={(props) => {
                return <UserList users={this.state.users}/>
              }}/>
              <Route exact path="/users/new" render={(props) => {
                      return <UserForm  onSubmit={this.handleSubmit}/>
                    }} />
          </Switch>



        </Fragment>
      </Router>
  )
}





}
export default UserContainer;
