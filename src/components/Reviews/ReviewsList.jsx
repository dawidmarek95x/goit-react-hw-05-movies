import React from 'react';
import ReviewsItem from './ReviewsItem';
import { Reviews } from './ReviewsList.styled';
import PropTypes from 'prop-types';

const ReviewsList = ({ reviews }) => {
  return (
    <>
      {reviews?.length === 0 && <p>We don't have any reviews for this movie.</p>}
      {reviews?.length > 0 && (
        <Reviews>
          {reviews?.map(review => (
            <ReviewsItem key={review.id} review={review} />
          ))}
        </Reviews>
      )}
    </>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
}

export default ReviewsList;
