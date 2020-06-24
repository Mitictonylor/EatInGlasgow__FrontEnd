import React from 'react';
import {Link} from 'react-router-dom';
import UserBookingForm from './UserBookingForm.js';
import Request from '../../helpers/request.js';
import RestaurantList from '../restaurants/RestaurantList.js';
import UserReviewForm from './UserReviewForm.js';
import UserSelectFilter from './UserSelectFilter.js';


const UserDetail = ({user, onDelete, onUpdate, restaurantsWithCoordinates}) => {

  if(!user && restaurantsWithCoordinates.length >0){
    return "loading"
  }



  const handlePostBooking = (booking)=>{
    alert(`${user.name} your booking for ${booking.restaurant.name} has been processed`)
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



  if (!user){
    return "Loading..."
  }

  const thisUrl= "/users/" + user.id
  const editUrl = thisUrl + "/edit"

  const time = new Date().getTime()



  //





  return (
  <>

  <Link to= {editUrl}><button className = "edit-button" type="button">Edit your profile</button></Link>
  <Link to= {thisUrl+"/bookings"}><button className = "edit-button" type="button">All your bookings</button></Link>
  <Link to= {thisUrl+"/reviews"}><button className = "edit-button" type="button">All your reviews</button></Link>
  <Link to= {thisUrl+"/map"}><button className = "edit-button" type="button">View Restaurants on Map</button></Link>
  <Link to= {thisUrl+"/reviews/new"}><button className = "edit-button" type="button">Leave a Review</button></Link>



    <div>
      <UserBookingForm  time = {time} restaurants = {restaurantsWithCoordinates} user= {user} today={today()} maxDate={maxDate()} onCreateBooking={handlePostBooking}/>
      <hr/>

    </div>

    <UserSelectFilter restaurants={restaurantsWithCoordinates} />



  </>
  )
}

export default UserDetail;
