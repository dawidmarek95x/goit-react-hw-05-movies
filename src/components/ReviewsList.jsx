import React from 'react';
import ReviewsItem from './ReviewsItem';

const ReviewsList = ({ reviews }) => {
  return (
    <>
      {reviews?.length === 0 && <p>There are currently no reviews yet.</p>}
      {reviews?.length > 0 && (
        <ul>
          {reviews?.map(review => (
            <ReviewsItem key={review.id} review={review} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ReviewsList;
