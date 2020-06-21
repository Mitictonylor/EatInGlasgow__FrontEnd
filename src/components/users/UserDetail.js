import React, {Component}  from 'react';
import User from "./User";
import {Link} from 'react-router-dom';
import Reviews from '../reviews/Review.js'
import Booking from '../bookings/Booking.js'


const UserDetail = ({user, onDelete, onUpdate}) => {



  const handleDelete = () => {
    onDelete(user.id)
  }

  // need to render those 2 lists


// const allbookings = user.bookings.map((booking, index) => {
//   return
//  <h2> All the bookings </h2>
//   <li key={index} className="component-item">
//     <div className="component">
//     <Booking booking={booking} />
//     </div>
//   </li>
// } )

// const allreviews = user.reviews.map((review, index) => {
//   return
//  <h2> All the reviews left </h2>
//   <li key={index} className="component-item">
//     <div className="component">
//     <Review review={booking} />
//     </div>
//   </li>
// } )


    if (!user){
      return "Loading..."
    }


    const editUrl = "/users/" + user.id + "/edit"


    return (
      <>
      
      <div className = "component">
      <User user = {user}/>

      <Link to= {editUrl}><button type="button">Edit {user.name}</button></Link>
      </div>

      </>
    )
  }

export default UserDetail;
