import React from 'react';
import {Link} from 'react-router-dom';

const NavigationBar = (props) => {
  return (
    <header>
      <Link to = "/"><img src="/images/logo.jpg"   alt="Logo"/></Link>

      <ul>
        <li>
          <Link to = "/restaurants" className="navLink"> RESTAURANT</Link>
        </li>
        <li>
          <Link to = "/users" className="navLink"> USER</Link>
        </li>
      </ul>
    </header>
  )
}

export default NavigationBar;
