import React, {Fragment} from 'react';

const Booking = ({booking})=>{
  if(!booking){
    return "Loading..."
  }

return(
<Fragment>
<p>{booking.restaurant.name}</p>
<p>reservation number:{booking.id}</p>
<p>{booking.date}</p>
<p>for {booking.user.name}</p>
<p>at {booking.time}</p>
<p>covers: {booking.seats}</p>



</Fragment>
)          
}
export default Restaurant;
