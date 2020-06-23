import React, {Component}  from 'react';
import Restaurant from "./Restaurant";
import {Link} from 'react-router-dom';
import ReviewList from '../reviews/ReviewList.js'
import BookingList from '../bookings/BookingList.js'



const RestaurantDetail = ({ onDelete, onUpdate, restaurant}) => {

  if(!restaurant){
    return "loading"
  }
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
