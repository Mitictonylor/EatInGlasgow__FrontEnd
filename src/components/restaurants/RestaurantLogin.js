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
    let user = this.state.user
    user[propertyName] = event.target.value;
    this.setState({user: user});
  }

  handleSubmit(event) {
    event.preventDefault();

      this.props.onLogin(this.state.user)
    }


  render(){

return(

          <>
          <h3> LOGIN USER </h3>

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
                value={this.state.user.email} />
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
                value={this.state.user.password} />
            </div>
    <button type="submit"> SAVE </button>
          </form>
    </>
)
  }
}
export default UserLogin;
