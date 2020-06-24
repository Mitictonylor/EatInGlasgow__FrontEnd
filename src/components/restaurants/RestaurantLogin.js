import React, {Component} from 'react'

class RestaurantLogin extends Component{

  constructor(props){
    super(props)
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
    const restaurant =  this.props.restaurants.find((restaurant) => {
    return restaurant.email === this.state.restaurant.email;})
    if(!restaurant){
      alert("username or password are wrong, please try again")
      window.location = `/restaurants/login`
    }
    event.preventDefault();
    this.props.onLogin(restaurant)
  }

  render(){

    return(
      <>
        <h3 className="title-container"> LOGIN RESTAURANT </h3>

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
          <button type="submit" className="edit-button"> LOGIN </button>
        </form>
    </>
    )
  }
}
export default RestaurantLogin;
