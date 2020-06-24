import React from 'react';
import Booking from './Booking.js'

const BookingList = (props) =>{
  if (props.bookings.lenght === 0){
    return 'Loading....'
  }

const bookingsOptions = props.bookings.map((booking) =>{
  return (
    <li key={booking.id} className="component-item">
      <div className="component">
        <Booking booking={booking} />
      </div>
    </li>
    )
  }
)

return(
  <ul className="component-list">
   {bookingsOptions}
  </ul>
 )
}
export default BookingList;
