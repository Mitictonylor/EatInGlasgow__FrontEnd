import React, {Component} from 'react'
import BookingList from '../bookings/BookingList.js'

class RestaurantBookingForm extends Component{

  constructor(props){
    super(props)//it will track the state just for the form
    this.state = {
                    date: props.today,

    }

    this.handleChange = this.handleChange.bind(this);
    this.checkAvailableSeatsInRestaurant = this.checkAvailableSeatsInRestaurant.bind(this)
    this.filterByDate = this.filterByDate.bind(this)
  }

  handleChange(event) {
    this.setState({date: event.target.value});

  }

filterByDate(date){
  const filteredBookings = this.props.restaurant.bookings.filter(booking => booking.date ===date)
  return filteredBookings
}



  findRestaurantById(id){
    return this.props.restaurant.find((restaurant) => {
      return restaurant.id === parseInt(id);
    });
  }

checkAvailableSeatsInRestaurant(date){
const restaurantBookings= this.props.restaurant.bookings
//accumulate the covers for the same day
let result = restaurantBookings.reduce(function(acc, val){
    let o = acc.filter(function(obj){
        return obj.date===val.date;
    }).pop() || {date:val.date, covers:0};
    o.covers += val.covers;
    acc.push(o);
    return acc;
},[]);
//get me just the object with the date i need
const dateBooking = result.filter(booking => booking.date ===date)
if(dateBooking.length >0){
const dateCovers = dateBooking[0].covers
const seatLeft = (this.props.restaurant.capacity - dateCovers  )
return(
  <>
  <p>Bookings for today: {dateCovers}</p>
  <p>Available seats: {seatLeft}</p>
  </>
    )
}
else{
  return(
    <>
    <p>No booking for today yet</p>
    <p>Available seats:{this.props.restaurant.capacity}</p>
    </>
  )
}
}

  render(){


        return(
          <>



            <div className="form_wrap">
              <label htmlFor="date">Date</label>
              <input
                required
                onChange={this.handleChange}
                name="date"
                id="date"
                type="date"
                min = {this.props.today}
                max = {this.props.maxDate}
                value={this.state.date} />
              </div>

          <div >
          {this.checkAvailableSeatsInRestaurant(this.state.date)}
          </div>
          <div >
          <h2>All the bookings</h2>
            <BookingList bookings={this.filterByDate(this.state.date)}/>
          </div>


    </>
    )
  }
}
export default RestaurantBookingForm;
