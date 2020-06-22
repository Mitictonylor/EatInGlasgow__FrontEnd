import React, {Component}  from 'react';
import User from "./User";
import {Link} from 'react-router-dom';
import Review from '../reviews/Review.js';
import Booking from '../bookings/Booking.js';
import UserBookingForm from './UserBookingForm.js';
import Request from '../../helpers/request.js';
import UserRestaurantMap from './UserRestaurantMap.js'
import RestaurantList from '../restaurants/RestaurantList.js';
import UserReviewForm from './UserReviewForm.js';

const UserDetail = ({user, onDelete, onUpdate, restaurants}) => {


  const handlePostBooking = (booking)=>{
    const request = new Request();
    request.post("/api/bookings", booking)
    .then(() => window.location = `/users/${user.id}`)
  }



  let today = function(){
    today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //As January is 0.
    let yyyy = today.getFullYear();

    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    return (yyyy+"-"+mm+"-"+dd);
  };



let maxDate =function(){
  today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth()+1; //As January is 0.
  let yyyy = today.getFullYear();
  mm=(parseInt(mm)+1)
  if(dd<10) dd='0'+dd;
  if(mm<10) mm=('0'+mm) ;

  return (yyyy+"-"+mm+"-"+dd);
};

const handlePostReview = (review)=>{
  const request = new Request();
  request.post("/api/reviews", review)
  .then(() => window.location = `/users/${user.id}`)
}

// let toReview = user.bookings.filter(({ id: first }) =>
//   !user.reviews.some(({ id: second }) => second === first));
// restaurantToReview = toReview.filter(booking => booking.date > today())


// const allbookings = user.bookings.map((booking, index) => {
//   return(
//     <>
//      <h2> All the bookings </h2>
//       <li key={index} className="component-item">
//         <div className="component">
//           <Booking booking={booking} />
//         </div>
//       </li>
//     </>
//   )
// })
//
// const allreviews = user.reviews.map((review, index) => {
//   return(
//     <>
//      <h2> All the reviews left </h2>
//       <li key={index} className="component-item">
//         <div className="component">
//           <Review review={review} />
//         </div>
//       </li>
//     </>
//   )
// })


// if(restaurantToReview.length >1){
//   return <p>There are Restaurant to review</p>
// } NEED TO ADD RESTAURANTS TO UserReviewFORM


  if (!user){
    return "Loading..."
  }


  const editUrl = "/users/" + user.id + "/edit"

  const time = new Date().getTime()
  return (
  <>

    <div className = "component">
      <User user = {user}/>
      <Link to= {editUrl}><button type="button">Edit {user.name}</button></Link>
      </div>
    <div>
      <UserBookingForm  time = {time} restaurants = {restaurants} user= {user} today={today} maxDate={maxDate()} onCreateBooking={handlePostBooking}/>
    </div>
      <RestaurantList restaurants={restaurants} />
    <div>
    </div>
  </>
  )
}

export default UserDetail;
