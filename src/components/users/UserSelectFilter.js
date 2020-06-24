import React, {Component} from 'react'
import RestaurantList from '../restaurants/RestaurantList.js';

class UserSelectFilter extends Component{
  constructor(props){
    super(props)
    this.state = {
                  cousine:"all",
                  priceRange:'all'
                  }
    this.handleCousineChange = this.handleCousineChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
  }

  handleCousineChange(event) {
    this.setState({cousine: event.target.value});
  }

  handlePriceChange(event) {
    this.setState({priceRange: event.target.value});
  }

  filterByCousineAndPrice(cousine, price){
    if (cousine === "all" && price === "all"){
      return this.props.restaurants
    }
    if(cousine === "all" && price !=="all"){
      const filteredRest = this.props.restaurants.filter(restaurant => restaurant.priceRange ===price)
      return filteredRest
    }
    if(price === "all" && cousine !=="all"){
      const filteredRest = this.props.restaurants.filter(restaurant => restaurant.cousine ===cousine)
      return filteredRest
    }
    const filteredRest = this.props.restaurants.filter(restaurant => restaurant.cousine ===cousine && restaurant.priceRange ===price)
    return filteredRest
  }

  render(){
    const uniqueCousines = [...new Set(this.props.restaurants.map(restaurant => restaurant.cousine))];

    const cousineOptions = uniqueCousines.map((cousine, index) => {
      return <option key={index} value={cousine}>{cousine}</option>});

    const uniquePrices = [...new Set(this.props.restaurants.map(restaurant => restaurant.priceRange))];

    const priceOptions = uniquePrices.map((price, index) => {
          return <option key={index} value={price}>{price}</option>});

    return(
      <>
        <h3> Filter Restaurant by : </h3>

          <form className="form-container">

            <div className="form_wrap">
              <label htmlFor="cousine">Choose Cousine</label>
                <select name= 'restaurant' onChange = {this.handleCousineChange} defaultValue='all'>
                  <option disabled value="all">Choose a cousine</option>
                  <option key='99' value="all">All cousines</option>
                  {cousineOptions}
                </select>
            </div>

            <div className="form_wrap">
              <label htmlFor="price">Choose Price Range</label>
                <select name= 'price' onChange = {this.handlePriceChange} defaultValue='all'>
                  <option disabled value="all">Choose a price Range</option>
                  <option key='99' value="all">All priceRange</option>
                  {priceOptions}
                </select>
            </div>

          </form>

          <div >
            <h2>All the restaurants</h2>
              <RestaurantList restaurants={this.filterByCousineAndPrice(this.state.cousine, this.state.priceRange)}/>
          </div>
  </>
    )
  }
}
export default UserSelectFilter;
