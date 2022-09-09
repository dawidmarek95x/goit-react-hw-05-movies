import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchMoviesById from '../hooks/useFetchMoviesById';
import Loader from '../components/Loader/Loader';
import ReviewsList from '../components/Reviews/ReviewsList';

const Reviews = () => {
  const { movieId } = useParams();
  const { movie, loading } = useFetchMoviesById(movieId, 'reviews');

  const reviews = movie.results;
  return (
    <>
      {loading && <Loader />}
      {!loading && <ReviewsList reviews={reviews} />}
    </>
  );
};

export default Reviews;
