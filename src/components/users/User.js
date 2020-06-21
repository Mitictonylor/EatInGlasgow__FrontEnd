import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const User = ({user})=>{
  if(!user){
    return "Loading..."
  }
const url = "/users/" + user.id;

return(
<Fragment>

    {user.name} {user.surname}

</Fragment>
)          
}
export default User;
