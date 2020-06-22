import React, {Component}  from 'react';
import User from "./User";
import {Link} from 'react-router-dom';
import Reviews from '../reviews/Review.js';
import Booking from '../bookings/Booking.js';
import UserBookingForm from './UserBookingForm.js';
import Request from '../../helpers/request.js';
import RestaurantMap from './UserRestaurantMap.js'


const UserDetail = ({user, onDelete, onUpdate, restaurants}) => {


  const handlePostBooking = (booking)=>{
    const request = new Request();
    request.post("/api/bookings", booking)
    .then(() => window.location = `/users/${user.id}`)
  }

  let today = function(){
  today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //As January is 0.
  var yyyy = today.getFullYear();

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

    const time = new Date().getTime()
    return (
    <>

      <div className = "component">
      <User user = {user}/>

      <Link to= {editUrl}><button type="button">Edit {user.name}</button></Link>
      </div>
      <div>
      <UserBookingForm  time = {time} restaurants = {restaurants} user= {user} today={today()} maxDate={maxDate()} onCreateBooking={handlePostBooking}/>
      </div>
      <div>
      <RestaurantMap restaurants={restaurants} />
      </div>
      </>
    )
  }

export default UserDetail;
