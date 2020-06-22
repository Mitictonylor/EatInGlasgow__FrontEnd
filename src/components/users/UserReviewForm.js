import React, {Component, Fragment} from 'react'

class UserreviewForm extends Component{

  constructor(props){
    super(props)//it will track the state just for the form
    this.state = {
                  review:{
                    date: props.today,
                    restaurant: null,
                    user: props.user,
                    rate:0

                  }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRestaurant = this.handleRestaurant.bind(this);
    this.findRestaurantById = this.findRestaurantById.bind(this);


  }

  handleChange(event) {
    let propertyName = event.target.name;
    let review = this.state.review
    review[propertyName] = event.target.value;
    this.setState({review: review});
  }

  handleSubmit(event) {
    event.preventDefault();
      this.props.onCreateReview(this.state.review)

    }

  handleRestaurant(event){
      const index = parseInt(event.target.value)
      const selectedRest = this.props.restaurants[index]
      let review = this.state.review;
      review['restaurant'] = selectedRest
      this.setState({review: review})
    }


  findRestaurantById(id){
    return this.props.restaurant.find((restaurant) => {
      return restaurant.id === parseInt(id);
    });
  }


  render(){
    const restOptions = this.props.restaurants.map((rest, index) => {
          return <option key={rest.id} value={index}>{rest.name} cousine: {rest.cousine}</option>
        });



        return(
          <>
          <h3> Book Now</h3>

            <form className="form-container" onSubmit={this.handleSubmit}>
            <div className="form_wrap">
            <label htmlFor="restaurant">Choose Restaurant</label>
            <select name= 'restaurant' onChange = {this.handleRestaurant} defaultValue='select-restaurant'>
                  <option disabled value="select-restaurant">Choose a restaurant...</option>
                  {restOptions}
                </select>
            </div>
            <div className="form_wrap">
              <label htmlFor="date">Date</label>
              <input
                required
                onChange={this.handleChange}
                placeholder="Choose date"
                name="date"
                id="date"
                type="date"
                min = {this.props.today}
                max = {this.props.maxDate}
                value={this.state.review.date} />
              </div>
              <div className="form_wrap">
                <label htmlFor="rate">Rate</label>
                <input
                  required
                  onChange={this.handleChange}
                  placeholder="rate"
                  name="rate"
                  id="rate"
                  type="number"
                  min = "1"
                  max = "5"
                  value={this.state.review.rate} />
                </div>

            <button type="submit"> SAVE </button>
          </form>
    </>
    )
  }
}
export default UserreviewForm;
