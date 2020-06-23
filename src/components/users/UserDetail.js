import React, {Component}  from 'react';
import User from "./User";
import {Link} from 'react-router-dom';
import ReviewList from '../reviews/ReviewList.js';
import UserBookingForm from './UserBookingForm.js';
import Request from '../../helpers/request.js';
import RestaurantList from '../restaurants/RestaurantList.js';
import UserReviewForm from './UserReviewForm.js';
import BookingList from '../bookings/BookingList.js';


const UserDetail = ({user, onDelete, onUpdate, restaurantsWithCoordinates}) => {

  if(!user && restaurantsWithCoordinates.length >0){
    return "loading"
  }

  console.log("prop restaurants in UserDetail",restaurantsWithCoordinates);


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

  const thisUrl= "/users/" + user.id
  const editUrl = thisUrl + "/edit"

  const time = new Date().getTime()



  return (
  <>
  <h2>WELCOME BACK {user.name.toUpperCase()}</h2>
  <Link to= {editUrl}><button className = "edit-button" type="button">Edit your profile</button></Link>
  <Link to= {thisUrl+"/bookings"}><button className = "edit-button" type="button">All your bookings</button></Link>
  <Link to= {thisUrl+"/reviews"}><button className = "edit-button" type="button">All your reviews</button></Link>
  <Link to= {thisUrl+"/map"}><button className = "edit-button" type="button">All the restaurants in our system</button></Link>



    <div>
      <UserBookingForm  time = {time} restaurants = {restaurantsWithCoordinates} user= {user} today={today()} maxDate={maxDate()} onCreateBooking={handlePostBooking}/>
      <hr/>
    </div>
      <RestaurantList restaurants={restaurantsWithCoordinates} />
      <hr/>


  </>
  )
}

export default UserDetail;
