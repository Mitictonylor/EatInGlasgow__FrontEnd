import React from 'react';
import {Link} from 'react-router-dom';

const NavigationBar = (props) => {
  return (<>
<div className="logo-container">
    <Link to = "/" className="logo-link"><img className="logo" src="/images/logo.png" alt="Logo"/></Link>
</div>
<div className = "menu-container">
  <div className="dropdown">
  <button className="dropbtn">RESTAURANT</button>
  <div className="dropdown-content">
    <Link to = "/restaurants/new" className="drop-link"> Register</Link>
    <Link to = "/restaurants/login" className="drop-link"> Login</Link>
  </div>
  </div>
  <div className="dropdown">
  <button className="dropbtn">USER</button>
  <div className="dropdown-content">
  <Link to = "/users/new" className="drop-link"> Register</Link>
  <Link to = "/users/login" className="drop-link"> Login</Link>
  </div>
</div>
</div>













    </>
  )
}





export default NavigationBar;
