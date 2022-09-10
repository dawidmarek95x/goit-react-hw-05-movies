import React from 'react';
import { Review } from './ReviewsItem.styled';

const ReviewsItem = ({review}) => {
  return (
    <Review>
      <h3>Author: {review.author}</h3>
      <p>{review.content}</p>
    </Review>
  );
};

export default ReviewsItem;