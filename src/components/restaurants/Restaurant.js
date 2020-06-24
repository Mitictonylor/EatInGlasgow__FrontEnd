import React, {Fragment} from 'react';

const Restaurant = ({restaurant})=>{
  if(!restaurant){
    return "Loading..."
  }

// const discount = "no discount today"
console.log(restaurant.discount);
// if(restaurant.discount > 0){
//   discount = <h4>{restaurant.discount}% Off Today</h4>
// }

return(
<Fragment>
<img className = "rest-pic" src={restaurant.pictureUrl} alt="rest-pic"/>

<h3>{restaurant.name}</h3>

<p>Cousin: {restaurant.cousine}</p>
<p>Working hours: {restaurant.openingTime} - {restaurant.closingTime}</p>
<p>Price Range: {restaurant.priceRange}</p>
</Fragment>
)          
}
export default Restaurant;
