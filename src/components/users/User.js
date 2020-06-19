import React, {Fragment} from 'react';

const User = ({user})=>{
  if(!user){
    return "Loading..."
  }

return(
<Fragment>
<p>{user.name}</p>
</Fragment>
)          
}
export default User;
