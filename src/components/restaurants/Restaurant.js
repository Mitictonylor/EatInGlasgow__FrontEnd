import React, {Fragment} from 'react';

const Restaurant = ({restaurant})=>{
  if(!restaurant){
    return "Loading..."
  }

let disc = ''

if (restaurant.discount > 0){
  disc = `OFFER! Book today and receive ${restaurant.discount}% off`
}


return(
<Fragment>
<img className = "rest-pic" src={restaurant.pictureUrl} alt="rest-pic"/>

<h3>{restaurant.name}</h3>
{disc}
<p>Cousin: {restaurant.cousine}</p>
<p>Working hours: {restaurant.openingTime} - {restaurant.closingTime}</p>
<p>Price Range: {restaurant.priceRange}</p>
</Fragment>
)          
}
export default Restaurant;
