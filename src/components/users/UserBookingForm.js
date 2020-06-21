import React, {Component, Fragment} from 'react'

class UserBookingForm extends Component{

  constructor(props){
    super(props)//it will track the state just for the form
    this.state = {
                  booking:{
                    date:"",
                    time:"",
                    restaurant: "",
                    user: props.user.id,
                    covers:

                  }
    }
  }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

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

}


  render(){


        return(
          <>
          <h3> Book Now</h3>

            <form className="form-container" onSubmit={this.handleSubmit}>
            <div className="form_wrap">
              <label htmlFor="name">Date</label>
              <input
                required
                onChange={this.handleChange}
                placeholder="Choose date"
                name="date"
                id="date"
                type="date"
                min = {this.state.user.date}
                max = {this.state.user.date}
                value={this.state.user.date} />
            </div>

            <div className="form_wrap">
              <label htmlFor="surname">Your surname:</label>
              <input
                required
                onChange={this.handleChange}
                placeholder="Input your surname..."
                name="surname"
                id="surname"
                type="text"
                value={this.state.user.surname} />
            </div>

            <div className="form_wrap">
              <label htmlFor="email">Your email:</label>
              <input
                required
                onChange={this.handleChange}
                placeholder="Input your em@il..."
                name="email"
                id="email"
                type="email"
                value={this.state.user.email} />
            </div>

            <div className="form_wrap">
              <label htmlFor="town">Town:</label>
              <input
                required
                onChange={this.handleChange}
                placeholder="Input town..."
                name="town"
                id="town"
                type="text"
                value={this.state.user.town} />
            </div>

            <div className="form_wrap">
              <label htmlFor="postcode">Postcode:</label>
              <input
                required
                onChange={this.handleChange}
                placeholder="Input postcode..."
                name="postcode"
                id="postcode"
                type="text"
                value={this.state.user.postcode} />
            </div>

            <button type="submit"> SAVE </button>
          </form>
    </>
    )
  }
}
export default UserBookingForm;
