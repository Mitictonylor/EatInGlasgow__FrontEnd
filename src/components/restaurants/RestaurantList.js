import React from 'react';
import Restaurant from './Restaurant.js'

const RestaurantList = (props) =>{
  if (!props.restaurants.lenght){
    return 'Loading....'
  }

const restaurantsOptions = props.restaurants.map((restaurant, index) =>{
  return (

  )
})



}
export default RestaurantList;
