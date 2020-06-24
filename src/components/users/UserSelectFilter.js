import React, {Component} from 'react'

class UserSelectFilter extends Component{

  constructor(props){
    super(props)//it will track the state just for the form
    this.state = {
                  cousine:"all",
                  price:'all'
                  }
    }

    this.handleChange = this.handleChange.bind(this);

  }

  handleCousineChange(event) {
    this.setState({cousine: event.target.value});
  }
  handlePriceChange(event) {
    this.setState({price: event.target.value});
  }



  render(){

    const uniqueCousines = [...new Set(restaurants.map(restaurant => restaurant.cousine))];


    const cousineOptions = uniqueCousines.map((cousine, index) => {
          return <option key={index} value={cousine}>{cousine}</option>
        });

    const uniquePrices = [...new Set(restaurants.map(restaurant => restaurant.priceRange))];

    const priceOptions = uniquePrices.map((price, index) => {
          return <option key={index} value={price}>{price}</option>
        });



        return(
          <>
          <h3> Filter Restaurant by Type of Cousine </h3>

            <form className="form-container">
            <div className="form_wrap">
            <label htmlFor="cousine">Choose Cousine</label>
            <select name= 'restaurant' onChange = {this.handleCousineChange} defaultValue='all'>
                  <option disabled value="all">Choose a cousine</option>
                  {cousineOptions}
                </select>
            </div>
            <div className="form_wrap">
            <label htmlFor="price">Choose Cousine</label>
            <select name= 'price' onChange = {this.handlePriceChange} defaultValue='all'>
                  <option disabled value="all">Choose a price Range</option>
                  {priceOptions}
                </select>
            </div>

          </form>
    </>
    )
  }
}
export default UserSelectFilter;
