import React,{Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/request.js'

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
            <p>staiullllllll</p>
          </Switch>
        </Fragment>
      </Router>
  )
}





}
export default UserContainer;
