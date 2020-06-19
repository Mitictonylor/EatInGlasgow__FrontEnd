import React,{Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/request.js';
import BookingList from '../components/bookings/BookingList.js'


class BookingContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      bookings:[{
                    date: "12/05/20",
                    time: "17:00",
                    user:{name: "john"},
                    restaurant: {name: "sapori"},
                    seats: 4
                  },
                  {
                    date: "15/05/20",
                    time: "19:00",
                    user:{name: "jack"},
                    restaurant: {name: "dissapori"},
                    seats: 2
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
                return <BookingList bookings={this.state.bookings}/>
              }}/>
          </Switch>
        </Fragment>
      </Router>
  )
}





}
export default BookingContainer;
