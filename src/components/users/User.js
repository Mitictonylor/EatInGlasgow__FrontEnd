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
</Fragment>
)          
}
export default User;
