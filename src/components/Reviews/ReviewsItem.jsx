import React from 'react';
import { Review } from './ReviewsItem.styled';
import PropTypes from 'prop-types';

const ReviewsItem = ({review}) => {
  return (
    <Review>
      <h3>Author: {review.author}</h3>
      <p>{review.content}</p>
    </Review>
  );
};

ReviewsItem.propTypes = {
  review: PropTypes.object.isRequired,
}

export default ReviewsItem;