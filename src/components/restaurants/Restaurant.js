import React, {Fragment} from 'react';

const Restaurant = ({restaurant})=>{
  if(!restaurant){
    return "Loading..."
  }

return(
<Fragment>
<p>{restaurant.name}</p>
</Fragment>
)          
}
export default Restaurant;
