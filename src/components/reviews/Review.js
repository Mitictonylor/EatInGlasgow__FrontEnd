import React, {Fragment} from 'react';

const Review = ({review})=>{
  if(!review){
    return "Loading..."
  }

return(
  <Fragment>
    <p>{review.restaurant.name}</p>
    <p>{review.date}</p>
    <p>from {review.user.name}</p>
    <p>rate: {review.rate}</p>
  </Fragment>
  )          
}
export default Review;
