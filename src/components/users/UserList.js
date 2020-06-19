import React from 'react';
import User from './User.js'


const UserList = (props) =>{
  if (props.users.lenght === 0){
    return 'Loading....'
  }

const usersOptions = props.users.map((user, index) =>{
  return (
    <li key={index} className="component-item">
      <div className="component">
      <User user={user} />
      </div>
    </li>

  )
})
return(
  <>
  <a className = "link" href="/users/new">ADD USER</a>
  <ul className="component-list">
   {usersOptions}
 </ul>
 </>
)


}
export default UserList;
