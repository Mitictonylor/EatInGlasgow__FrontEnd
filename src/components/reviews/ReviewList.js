import React from 'react';
import Review from './Review.js'

const ReviewList = (props) =>{
  if (props.reviews.lenght === 0){
    return 'Loading....'
  }

  const reviewsOptions = props.reviews.map((review) =>{
    return (
      <li key={review.id} className="component-item">
        <div className="component">
          <Review review={review} />
        </div>
      </li>
    )
  })

return(
  <ul className="component-list">
   {reviewsOptions}
  </ul>
)

}
export default ReviewList;
