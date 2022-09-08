import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchMoviesById from '../hooks/useFetchMoviesById';
import CastList from './CastList';
import Loader from './Loader';

const Cast = () => {
  const { movieId } = useParams();
  const { movie, loading } = useFetchMoviesById(movieId, 'credits');

  const casts = movie.cast;

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <CastList casts={casts}/>
      )}
    </>
  );
};

export default Cast;
