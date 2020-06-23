import React, {Component}  from 'react';
import Restaurant from "./Restaurant";
import {Link} from 'react-router-dom';
import Reviews from '../reviews/Review.js'
import Booking from '../bookings/Booking.js'



const RestaurantDetail = ({ onDelete, onUpdate, restaurant}) => {

  if(!restaurant){
    return "loading"
  }
  console.log('restaurant Detail', restaurant)
  // need to render those 2 lists


// const allbookings = restaurant.bookings.map((booking, index) => {
//   return
//  <h2> All the bookings </h2>
//   <li key={index} className="component-item">
//     <div className="component">
//     <Booking booking={booking} />
//     </div>
//   </li>
// } )

// const allreviews = restaurant.reviews.map((review, index) => {
//   return
//  <h2> All the reviews left </h2>
//   <li key={index} className="component-item">
//     <div className="component">
//     <Review review={booking} />
//     </div>
//   </li>
// } )


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

      </div>
      </>
    )
  }

export default RestaurantDetail;
