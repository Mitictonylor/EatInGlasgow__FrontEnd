import React from 'react';

const NavigationBar = (props) => {
  return (
    <header>
      <img src="/images/logo.jpg" alt="Logo"/>

      <ul>
        <li className="navLink">
          <a href="/pirates">Pirates</a>
        </li>
        <li className="navLink">
          <a href="/ships">Ships</a>
        </li>
        <li className="navLink">
          <a href="/raids" >Raids</a>
        </li>

      </ul>
    </header>
  )
}

export default NavBar;
