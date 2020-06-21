import React, {Component, Fragment} from 'react'

class UserBookingForm extends Component{

  constructor(props){
    super(props)//it will track the state just for the form
    this.state = {
                  booking:{
                    date: props.today,
                    time:"",
                    restaurant: "",
                    user: props.user.id,
                    covers:null

                  }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.restaurantsOptions = this.restaurantsOptions.bind(this);

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
restaurantsOptions (){
    this.props.restaurants.map((restaurant, index)=>{
    return <option value= {restaurant.id} key={index}>{restaurant.name}</option>
    })}


  render(){



        return(
          <>
          <h3> Book Now</h3>

            <form className="form-container" onSubmit={this.handleSubmit}>
            <div className="form_wrap">
            <select id="country-selector" defaultValue="default" onChange = {this.handleChange}>
                  <option disabled value="default">Choose a restaurant...</option>
                  {this.restaurantsOptions}
                </select>
            </div>
            <div className="form_wrap">
              <label htmlFor="name">Date</label>
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


            <button type="submit"> SAVE </button>
          </form>
    </>
    )
  }
}
export default UserBookingForm;
