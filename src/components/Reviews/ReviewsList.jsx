import React from 'react';
import ReviewsItem from './ReviewsItem';

const ReviewsList = ({ reviews }) => {
  return (
    <>
      {reviews?.length === 0 && <p>We don't have any reviews for this movie.</p>}
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
