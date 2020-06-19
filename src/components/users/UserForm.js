import React, {Component, Fragment} from 'react'

class UserForm extends Component{

  constructor(props){
    super(props)//it will track the state just for the form
    this.state = {
                  name: '',
                  surname: '',
                  email: '',
                  town: '',
                  postcode: '',

    }

  }






  render(){
    return(

      <form>
      <div className="form_wrap">
        <label htmlFor="name">Your name:</label>
        <input
          required
          onChange={this.handleChange}
          placeholder="Input your name..."
          name="name"
          id="name"
          type="text"
          value={this.state.name} />
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
          value={this.state.surname} />
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
          value={this.state.email} />
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
          value={this.state.town} />
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
          value={this.state.postcode} />
      </div>

      <input onClick={this.handleSubmit} type="submit" value="submit" />
    </form>
    )
  }
}
export default UserForm;
