import React, {Component}  from 'react';
import User from "./User";
import {Link} from 'react-router-dom';
import ReviewList from '../reviews/ReviewList.js';
import UserBookingForm from './UserBookingForm.js';
import Request from '../../helpers/request.js';
import UserRestaurantMap from './UserRestaurantMap.js'
import RestaurantList from '../restaurants/RestaurantList.js';
import UserReviewForm from './UserReviewForm.js';
import BookingList from '../bookings/BookingList.js';


const UserDetail = ({user, onDelete, onUpdate, restaurants}) => {

  if(!user && restaurants.length >0){
    return "loading"
  }

  console.log("prop restaurants in UserDetail",restaurants);
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









  if (!user){
    return "Loading..."
  }


  const editUrl = "/users/" + user.id + "/edit"

  const time = new Date().getTime()



  return (
  <>

    <div className = "component">
      <User user = {user}/>
      <Link to= {editUrl}><button className = "edit-button" type="button">Edit {user.name}</button></Link>
      </div>
    <div>
      <UserBookingForm  time = {time} restaurants = {restaurants} user= {user} today={today()} maxDate={maxDate()} onCreateBooking={handlePostBooking}/>
      <hr/>
    </div>
      <RestaurantList restaurants={restaurants} />
      <hr/>
    <div>
      <h2> All the bookings </h2>
      <BookingList bookings={user.bookings}/>
      <hr/>
    </div>
    <div>
      <h2> All the reviews left </h2>
      <ReviewList reviews={user.reviews}/>
      <hr/>
    </div>
    <div>
      <UserRestaurantMap restaurants={restaurants}/>
    </div>

  </>
  )
}

export default UserDetail;
