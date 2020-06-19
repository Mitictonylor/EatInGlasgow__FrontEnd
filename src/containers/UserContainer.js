import React,{Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/request.js'
import UserList from '../components/users/UserList.js'



class UserContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      users:[{
                    id:1,
                    name: "john",
                    surname: 'wayne',
                    email: 'a@a.it',
                    town: 'Paisley',
                    postcode: 'p1e4w'
                  },
                  {
                    id:2,
                    name: "jack",
                    surname: 'pikke',
                    email: 'b@b.it',
                    town: 'Glasgow',
                    postcode: 'g327qa'
                  }
      ]
    }
  this.handleSubmit = this.handleSubmit.bind(this);
  this.addUser = this.addUser.bind(this);
  }

  addUser(){
    return
  }

  handleSubmit(data) {

      this.setState({   name: data.name,
                        surname: data.surname,
                        email: data.email,
                        town: data.town,
                        postcode: data.postcode });
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

          </Switch>



        </Fragment>
      </Router>
  )
}





}
export default UserContainer;
