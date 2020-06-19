import React from 'react';

const NavigationBar = (props) => {
  return (
    <header>
      <img src="/images/logo.jpg" alt="Logo"/>

      <ul>
        <li className="navLink">
          <a href="/restaurants">Restaurants</a>
        </li>
        <li className="navLink">
          <a href="/users">Users</a>
        </li>
        <li className="navLink">
          <a href="/bookings" >Bookings</a>
        </li>
        <li className="navLink">
          <a href="/reviews" >Reviews</a>
        </li>

      </ul>
    </header>
  )
}

export default NavigationBar;
