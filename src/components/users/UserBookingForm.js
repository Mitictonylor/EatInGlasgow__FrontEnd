import React, {Component} from 'react'

class UserBookingForm extends Component{

  constructor(props){
    super(props)//it will track the state just for the form
    this.state = {
                  booking:{
                          date: props.today,
                          time: props.time ,
                          restaurant: null,
                          user: props.user,
                          covers:0
                        }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRestaurant = this.handleRestaurant.bind(this);
    this.findRestaurantById = this.findRestaurantById.bind(this);
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
    if(this.checkAvailableSeatsInRestaurant(this.state.booking.date)){
      this.props.onCreateBooking(this.state.booking)
    }else{
      alert("restaurant is full, please try another date or another restaurant")
    }
  }

  handleRestaurant(event){
      const index = parseInt(event.target.value)
      const selectedRest = this.props.restaurants[index]
      let booking = this.state.booking;
      booking['restaurant'] = selectedRest
      this.setState({booking: booking})
    }

  findRestaurantById(id){
    return this.props.restaurant.find((restaurant) => {
      return restaurant.id === parseInt(id)});
  }

  checkAvailableSeatsInRestaurant(date){
    const restaurantBookings= this.state.booking.restaurant.bookings
    //accumulate for each day the covers
    let result = restaurantBookings.reduce(function(acc, val){
      let o = acc.filter(function(obj){
          return obj.date===val.date;})
          .pop() || {date:val.date, covers:0};
          o.covers += val.covers;
          acc.push(o);
          return acc;
        },[]);
  //get me just the object with the date i need
    const dateBooking = result.filter(booking => booking.date ===date)
    if(dateBooking.length >0){
      const dateCovers = dateBooking[0].covers
      if ((dateCovers + this.state.booking.covers) > this.state.booking.restaurant.capacity){
        return false
      }else{
        return true
      }
    }
  return true
  }

  render(){
    const restOptions = this.props.restaurants.map((rest, index) => {
      return <option key={rest.id} value={index}>{rest.name} cousine: {rest.cousine}</option>});

    let timeSection = null

      if(this.state.booking.restaurant != null){

        timeSection = (<div className="form_wrap">
                        <label htmlFor="time">Time</label>
                          <input
                            required
                            onChange={this.handleChange}
                            name="time"
                            id="time"
                            type="time"
                            step="900"
                            min = {this.state.booking.restaurant.openingTime}
                            max = {this.state.booking.restaurant.closingTime}
                            value={this.state.booking.time} />
                        </div>)
      }else{
        timeSection = (<div className="form_wrap">
                        <label htmlFor="time">Time</label>
                          <input
                            required
                            onChange={this.handleChange}
                            name="time"
                            id="time"
                            type="time"
                            step="900"
                            min="09:00"
                            max="23:00"
                            value={this.state.booking.time} />
                          </div>)
      }

  return(
    <>
      <h3> Book Now</h3>

        <form className="form-container" onSubmit={this.handleSubmit}>
          <div className="form_wrap">
            <label htmlFor="restaurant">Choose Restaurant</label>
              <select name= 'restaurant' onChange = {this.handleRestaurant} defaultValue='select-restaurant'>
                <option disabled value="select-restaurant">Choose a restaurant...</option>
                {restOptions}
              </select>
          </div>
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
        {timeSection}
        <div className="form_wrap">
          <label htmlFor="covers">Covers</label>
            <input
              required
              onChange={this.handleChange}
              placeholder="Covers"
              name="covers"
              id="covers"
              type="number"
              min = "1"
              max = "8"
              value={this.state.booking.covers} />
          </div>
        <button type="submit"> SAVE </button>
      </form>
    </>
  )
  }
}
export default UserBookingForm;
