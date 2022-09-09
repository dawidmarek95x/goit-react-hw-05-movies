import MoviesList from 'components/Movies/MoviesList';
import MoviesSearchbar from '../../components/Movies/MoviesSearchbar';
import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';
import { Outlet, useParams, useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'services/movieApi';

const MoviesPage = () => {
  const params = useParams();
  const [queryValue, setQueryValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesByQuery, setMoviesByQuery] = useState([]);

  const queryChangeHandler = e => {
    setQueryValue(e.target.value);
  };

  const querySubmitHandler = e => {
    e.preventDefault();

    queryValue ? setSearchParams({ query: queryValue }) : setSearchParams('');

    setQueryValue('');
  };

  const getWantedMovies = useCallback(async () => {
    try {
      const query = searchParams.get('query');
      if (query) {
        const moviesList = await getMoviesByQuery(query);
        setMoviesByQuery(moviesList);
      }
    } catch (error) {
      console.log(error);
    }
  }, [searchParams]);

  useEffect(() => {
    getWantedMovies();
  }, [getWantedMovies]);

  return (
    <>
      {!params.movieId && (
        <>
          <MoviesSearchbar
            value={queryValue}
            submitHandler={querySubmitHandler}
            changeHandler={queryChangeHandler}
          />
          <MoviesList movies={moviesByQuery} />
        </>
      )}
      {params.movieId && (
        <>
          <Outlet />
        </>
      )}
    </>
  );
};

export default MoviesPage;
