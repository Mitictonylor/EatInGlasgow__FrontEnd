import React, {Component}  from 'react';
import User from "./User";
import {Link} from 'react-router-dom';

const UserDetail = ({user, onDelete, onUpdate}) => {


  const handleDelete = () => {
    onDelete(user.id)
  }


    if (!pirate){
      return "Loading..."
    }


    const editUrl = "/users/" + user.id + "/edit"


    return (
      <div className = "component">
      <User user = {user}/>

      <button onClick={handleDelete}>Delete {user.name}</button>
      <Link to= {editUrl}><button type="button">Edit {user.name}</button></Link>
      </div>
    )
  }

export default UserDetail;
