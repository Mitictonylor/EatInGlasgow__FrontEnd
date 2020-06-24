import React  from 'react';
import Restaurant from "./Restaurant";
import {Link} from 'react-router-dom';

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


  const thisUrl= "/restaurants/" + restaurant.id
  const editUrl = thisUrl + "/edit"



    return (
    <>

      <h2>WELCOME BACK {restaurant.name.toUpperCase()}</h2>
      <Link to= {editUrl}><button className = "edit-button" type="button">Edit {restaurant.name}</button></Link>
      <Link to= {thisUrl+"/reviews"}><button className = "edit-button" type="button">All your reviews</button></Link>


      <>
      <RestaurantBookingsForm restaurant={restaurant} today={today()} maxDate={maxDate()} />
      </>

      </>
    )
  }

export default RestaurantDetail;
