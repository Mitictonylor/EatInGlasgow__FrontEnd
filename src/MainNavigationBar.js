import React from 'react';

const NavigationBar = (props) => {
  return (
    <header>
      <a href = "/"><img src="/images/logo.jpg"   alt="Logo"/></a>

      <ul>
        <li className="navLink">
          <a href="/restaurants">Restaurants</a>
        </li>
        <li className="navLink">
          <a href="/users">Users</a>
        </li>

      </ul>
    </header>
  )
}

export default NavigationBar;
