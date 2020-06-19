import React,{Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/request.js'
import ReviewList from '../components/reviews/ReviewList.js'

class ReviewContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      reviews:[{
                      id:1,
                      date: "13/05/20",
                      user:{name: "john"},
                      restaurant: {name: "sapori"},
                      rate: 4
                    },
                    {
                      id:2,
                      date: "16/05/20",
                      time: "19:00",
                      user:{name: "jack"},
                      restaurant: {name: "dissapori"},
                      rate: 3
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
                return <ReviewList reviews={this.state.reviews}/>
              }}/>
          </Switch>
        </Fragment>
      </Router>
  )
}





}
export default ReviewContainer;
