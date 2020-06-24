import React from 'react';
import Restaurant from './Restaurant.js'

const RestaurantList = (props) =>{
  if (props.restaurants.lenght === 0){
    return 'Loading....'
  }

const restaurantsOptions = props.restaurants.map((restaurant, index) =>{
  return (
    <li key={index} className="component-item">
      <div className="component">
      <Restaurant restaurant={restaurant} />
      </div>
    </li>

  )
})




return(
  <>

  <ul className="component-list">

   {restaurantsOptions}
 </ul>
 </>
)


}
export default RestaurantList;
