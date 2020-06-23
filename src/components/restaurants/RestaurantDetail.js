import React  from 'react';
import Restaurant from "./Restaurant";
import {Link} from 'react-router-dom';
import ReviewList from '../reviews/ReviewList.js'
import BookingList from '../bookings/BookingList.js'



const RestaurantDetail = ({ onDelete, onUpdate, restaurant}) => {

  if(!restaurant){
    return "loading"
  }


    if (!restaurant){
      return "Loading..."
    }


    const editUrl = "/restaurants/" + restaurant.id + "/edit"


    return (
    <>

      <div className = "component">
      <Restaurant restaurant = {restaurant}/>

      <Link to= {editUrl}><button className = "edit-button" type="button">Edit {restaurant.name}</button></Link>
      </div>
      <div>
      <h2>All the bookings</h2>
        <BookingList bookings={restaurant.bookings}/>
      </div>
      <div>
      <h2>All the reviews</h2>
        <ReviewList reviews={restaurant.reviews}/>
      </div>

      </>
    )
  }

export default RestaurantDetail;
