import React, {Component} from 'react'
import BookingList from '../bookings/BookingList.js'

class UserBookingForm extends Component{

  constructor(props){
    super(props)//it will track the state just for the form
    this.state = {
                    date: props.today,
                    bookings:props.restaurant.bookings
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkAvailableSeatsInRestaurant = this.checkAvailableSeatsInRestaurant.bind(this)

  }

  handleChange(event) {
    let propertyName = event.target.name;
    let booking = this.state.booking
    booking[propertyName] = event.target.value;
    this.setState({booking: booking});
  }

  handleSubmit(event) {
    event.preventDefault();
    //fai la fetch e fammi vedere le bookind di questo restaurant id
      this.props.onSubmit(this.state.booking)

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
return( <p>Bookings for today: {dateCovers}</p>
        <p>Available seats: {seatLeft}</p>
      )
}
else{
  return(<p>No booking for today yet</p>
    <p>Available seats:{this.props.restaurant.capacity}</p>


}

  render(){


        return(
          <>
          {checkAvailableSeatsInRestaurant(this.state.booking.date)}

            <form className="form-container" onSubmit={this.handleSubmit}>
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
                value={this.state.booking.date} />
              </div>
                      <button type="submit"> SAVE </button>
          </form>

          <div>
          <h2>All the bookings</h2>
            <BookingList bookings={restaurant.bookings}/>
          </div>


    </>
    )
  }
}
export default UserBookingForm;
