import React,{Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/request.js'
import UserList from '../components/users/UserList.js'
import UserForm from '../components/users/UserForm.js'


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
                    postcode: 'p1e4w',
                  },
                  {
                    id:2,
                    name: "jack",
                    surname: 'pikke',
                    email: 'b@b.it',
                    town: 'Glasgow',
                    postcode: 'g327qa',
                  }
      ]
    }
  }

render(){
  return(
    <Router>
        <Fragment>
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
