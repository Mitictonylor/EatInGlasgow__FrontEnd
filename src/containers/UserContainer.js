import React,{Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/request.js'
import UserList from '../components/users/UserList.js'


class UserContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      users:[{
                    name: "john"
                  },
                  {
                    name: "jack"
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
