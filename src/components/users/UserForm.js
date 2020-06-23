import React, {Component, Fragment} from 'react'

class UserForm extends Component{

  constructor(props){
    super(props)//it will track the state just for the form
    this.state = {
                  user: {name: '',
                  surname: '',
                  email: '',
                  town: '',
                  postcode: ''
    }
  }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
componentDidMount(){
  if(this.props.user){
    this.setState({user: { ... this.props.user}})
  }
}

  handleChange(event) {
    let propertyName = event.target.name;
    let user = this.state.user
    user[propertyName] = event.target.value;
    this.setState({user: user});
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.user.id){
      this.props.onUpdate(this.state.user)
    }else{
      this.props.onCreate(this.state.user)
    }

}


  render(){

    let heading = ""; // ADDED

      if (!this.props.user){
        heading = "Create User"
      } else {
        heading = "Edit " + this.props.user.name +" "+ this.props.user.surname;
      }
        return(
          <>
          <h3> {heading}</h3>

            <form className="form-container" onSubmit={this.handleSubmit}>
            <div className="form_wrap">
              <label htmlFor="name">Your name:</label>
              <input
                required
                onChange={this.handleChange}
                placeholder="Input your name..."
                name="name"
                id="name"
                type="text"
                value={this.state.user.name} />
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
export default UserForm;
