import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const User = ({user})=>{
  if(!user){
    return "Loading..."
  }
const url = "/users/" + user.id;

return(
<Fragment>
<Link to = {url} className="name">
    {user.name} {user.surname}
    </Link>
<p>Email: {user.email}</p>
<p>Town: {user.town}</p>
<p>Postcode: {user.postcode}</p>
</Fragment>
)          
}
export default User;
