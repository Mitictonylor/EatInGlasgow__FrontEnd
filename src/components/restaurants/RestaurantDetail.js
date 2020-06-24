import React  from 'react';
import Restaurant from "./Restaurant";
import {Link} from 'react-router-dom';
import ReviewList from '../reviews/ReviewList.js'
import BookingList from '../bookings/BookingList.js'
import RestaurantBookingsForm from "./RestaurantBookingForm";


const RestaurantDetail = ({ onDelete, onUpdate, restaurant}) => {

  if(!restaurant){
    return "loading"
  }

  let today = function(){
    let today = new Date();
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
    dd=(parseInt(dd)+14)
    if(dd<10) dd='0'+dd;
    if(mm<10) mm=('0'+mm) ;

    return (yyyy+"-"+mm+"-"+dd);
  };



    const editUrl = "/restaurants/" + restaurant.id + "/edit"


    return (
    <>

      <div className = "component">
      <Restaurant restaurant = {restaurant}/>

      <Link to= {editUrl}><button className = "edit-button" type="button">Edit {restaurant.name}</button></Link>
      </div>
      <div className = "component">
      <RestaurantBookingsForm restaurant={restaurant} today={today()} maxDate={maxDate()} />
      </div>

      <div>
      <h2>All the reviews</h2>
        <ReviewList reviews={restaurant.reviews}/>
      </div>

      </>
    )
  }

export default RestaurantDetail;
