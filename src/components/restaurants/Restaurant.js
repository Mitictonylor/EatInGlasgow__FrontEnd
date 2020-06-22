import React, {Fragment} from 'react';

const Restaurant = ({restaurant})=>{
  if(!restaurant){
    return "Loading..."
  }

return(
<Fragment>
<img className = "rest-pic" src={restaurant.pictureUrl} alt="rest-pic"/>

<p>{restaurant.name}</p>
<p>Cousin: {restaurant.cousine}</p>
<p>Working hours: {restaurant.openingTime} - {restaurant.closingTime}</p>
</Fragment>
)          
}
export default Restaurant;
