import React from 'react'

const ReviewsItem = ({review}) => {
  return (
    <li>
      <h3>Author: {review.author}</h3>
      <p>{review.content}</p>
    </li>
  )
}

export default ReviewsItem