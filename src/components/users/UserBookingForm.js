import React, {Component, Fragment} from 'react'

class UserBookingForm extends Component{

  constructor(props){
    super(props)//it will track the state just for the form
    this.state = {
                  booking:{
                    date: props.today,
                    time:"",
                    restaurant: 0,
                    user: props.user.id,
                    covers:0

                  }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.restaurantsOptions = this.restaurantsOptions.bind(this);
    this.findRestaurantById = this.findRestaurantById.bind(this);
    this.timeSection = this.timeSection.bind(this);


  }

  handleChange(event) {
    let propertyName = event.target.name;
    let booking = this.state.booking
    booking[propertyName] = event.target.value;
    this.setState({booking: booking});
  }

  handleSubmit(event) {
    event.preventDefault();
      this.props.onCreateBooking(this.state.booking)

    }
restaurantsOptions(){
    let options = this.props.restaurants.map((restaurant, index)=>{
    return <option value= {restaurant.id} key={index}>{restaurant.name}</option>
    })
    return options
  }

  findRestaurantById(id){
    return this.props.restaurant.find((restaurant) => {
      return restaurant.id === parseInt(id);
    });
  }
timeSection(){
  if(this.state.restaurant != null){
  const restaurant = this.findRestaurantById(this.state.restaurant)
  return( <div className="form_wrap">
    <label htmlFor="time">Time</label>
    <input
      required
      onChange={this.handleChange}
      placeholder="Choose time"
      name="time"
      id="time"
      type="time"
      min = {restaurant.openingTime}
      max = {restaurant.closingTime}
      value={this.state.booking.time} />
    </div>)
}}

  render(){



        return(
          <>
          <h3> Book Now</h3>

            <form className="form-container" onSubmit={this.handleSubmit}>
            <div className="form_wrap">
            <label htmlFor="name">Choose Restaurant</label>
            <select id="country-selector" defaultValue="default" onChange = {this.handleChange}>
                  <option>Choose a restaurant...</option>

                  {this.restaurantsOptions}
                </select>
            </div>
            <div className="form_wrap">
              <label htmlFor="date">Date</label>
              <input
                required
                onChange={this.handleChange}
                placeholder="Choose date"
                name="date"
                id="date"
                type="date"
                min = {this.props.today}
                max = {this.props.maxDate}
                value={this.state.booking.date} />
              </div>
              {this.timeSection}
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
