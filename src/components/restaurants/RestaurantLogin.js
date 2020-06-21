import React, {Component, Fragment} from 'react'

class RestaurantLogin extends Component{

  constructor(props){
    super(props)//it will track the state just for the form
    this.state = {
                  restaurant: {email: '',
                         password: '',

    }
  }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleChange(event) {
    let propertyName = event.target.name;
    let restaurant = this.state.restaurant
    restaurant[propertyName] = event.target.value;
    this.setState({restaurant: restaurant});
  }

  handleSubmit(event) {
    event.preventDefault();

      this.props.onLogin(this.state.restaurant)
    }


  render(){

return(

          <>
          <h3> LOGIN RESTAURANT </h3>

            <form className="form-container" onSubmit={this.handleSubmit}>
            <div className="form_wrap">
              <label htmlFor="email">Your email:</label>
              <input
                required
                onChange={this.handleChange}
                placeholder="Input your email"
                name="email"
                id="email"
                type="email"
                value={this.state.restaurant.email} />
            </div>

            <div className="form_wrap">
              <label htmlFor="password">Your password:</label>
              <input
                required
                onChange={this.handleChange}
                placeholder="Input your password..."
                name="password"
                id="password"
                type="password"
                value={this.state.restaurant.password} />
            </div>
    <button type="submit"> SAVE </button>
          </form>
    </>
)
  }
}
export default RestaurantLogin;
