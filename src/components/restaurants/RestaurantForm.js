import React, {Component} from 'react'

class RestaurantForm extends Component{

  constructor(props){
    super(props)
    this.state = {
           restaurant:{name: "",
                       pictureUrl: "",
                       capacity: 0,
                       priceRange: "",
                       cousine: "",
                       discount:0,
                       email: "",
                       address: "",
                       postcode: "",
                       town: "",
                       openingTime: "",
                       closingTime: ""
                     }
                   }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.findPrice = this.findPrice.bind(this);
  }

  componentDidMount(){
    if(this.props.restaurant){
      this.setState({restaurant: { ...this.props.restaurant}})
    }
  }

  findPrice(){
    if(this.props.restaurant){
      return this.props.restaurant.priceRange
    } else {
      return null;
    }
  }

  handleChange(event) {
    let propertyName = event.target.name;
    let restaurant = this.state.restaurant
    restaurant[propertyName] = event.target.value;
    this.setState({restaurant: restaurant});
  }

  handleSubmit(event) {
    event.preventDefault()
    if(this.state.restaurant.id){
      this.props.onUpdate(this.state.restaurant)
    }else{
      const restaurant =  this.props.restaurants.find((restaurant) => {
        return restaurant.email === this.state.restaurant.email;})
      if(restaurant){
        alert("email already in the system, please try another one")
        window.location = `/restaurants/new`
      }else{
      this.props.onCreate(this.state.restaurant)
    }
   }
  }

  render(){
    let heading = ""; // ADDED

    if (!this.props.restaurant){
      heading = "Create restaurant"
    } else {
      heading = "Edit " + this.props.restaurant.name ;
    }

  const priceCateg = ["cheap", "medium", 'expensive']
  const priceOptions = priceCateg.map((price, index) => {
    return <option key={index} value={price}>{price}</option>});


    return(
      <>
        <h3> {heading}</h3>

        <form className="form-container">
          <div className="form_wrap">
            <label htmlFor="name">Restaurant name:</label>
              <input
                required
                onChange={this.handleChange}
                placeholder="Input your name..."
                name="name"
                id="name"
                type="text"
                value={this.state.restaurant.name} />
          </div>
          <div className="form_wrap">
            <label htmlFor="pictureUrl">Image URL:</label>
              <input
                required
                onChange={this.handleChange}
                placeholder="Input the image URL..."
                name="pictureUrl"
                id="pictureUrl"
                type="text"
                value={this.state.restaurant.pictureUrl} />
          </div>
          <div className="form_wrap">
            <label htmlFor="capacity">Seat capacity:</label>
              <input
                required
                onChange={this.handleChange}
                placeholder="Input seat capacity..."
                name="capacity"
                id="capacity"
                type="number"
                value={this.state.restaurant.capacity} />
          </div>
          <div className="form_wrap">
            <label htmlFor="priceRange">PriceRange:</label>
              <select name="priceRange" onChange={this.handleChange} defaultValue={this.findPrice() || 'select-price'}>
                <option disabled value="select-price">Select a price range</option>
                {priceOptions}
              </select>
          </div>
          <div className="form_wrap">
            <label htmlFor="cousine">Cousine:</label>
              <input
                required
                onChange={this.handleChange}
                placeholder="Input cousine..."
                name="cousine"
                id="cousine"
                type="text"
                value={this.state.restaurant.cousine} />
          </div>
          <div className="form_wrap">
            <label htmlFor="discount">Discount:</label>
              <input
                required
                onChange={this.handleChange}
                placeholder="Input discount..."
                name="discount"
                id="discount"
                type="number"
                value={this.state.restaurant.discount} />
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
                value={this.state.restaurant.email} />
          </div>
          <div className="form_wrap">
            <label htmlFor="address">address:</label>
              <input
                required
                onChange={this.handleChange}
                placeholder="Input address..."
                name="address"
                id="address"
                type="text"
                value={this.state.restaurant.address} />
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
                value={this.state.restaurant.town} />
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
                value={this.state.restaurant.postcode} />
          </div>

          <div className="form_wrap">
            <label htmlFor="openingTime">Opening time:</label>
              <input
                required
                onChange={this.handleChange}
                placeholder="Input opening time..."
                name="openingTime"
                id="openingTime"
                type="time"
                value={this.state.restaurant.openingTime} />
          </div>
          <div className="form_wrap">
            <label htmlFor="closingTime">Closing time:</label>
              <input
                required
                onChange={this.handleChange}
                placeholder="Input closing Time..."
                name="closingTime"
                id="closingTime"
                type="time"
                value={this.state.restaurant.closingTime} />
          </div>
          <input onClick={this.handleSubmit} type="submit" value="submit" />
        </form>
    </>
    )
  }
}
export default RestaurantForm;
