import MovieList from 'components/MovieList';
import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';
import {
  Outlet,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import { getMoviesByQuery } from 'services/movieApi';

const MoviesPage = () => {
  const params = useParams();
  const [queryValue, setQueryValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesByQuery, setMoviesByQuery] = useState([]);

  const queryChangeHandler = (e) => {
    setQueryValue(e.target.value);
  };

  const querySubmitHandler = (e) => {
    e.preventDefault();

    queryValue
      ? setSearchParams({ query: queryValue })
      : setSearchParams('');
    
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
  }, [searchParams],
);

  useEffect(() => {
    getWantedMovies();
  }, [getWantedMovies]);

  return (
    <>
      {!params.movieId && (
        <>
          <form onSubmit={querySubmitHandler}>
            <input
              type="text"
              value={queryValue}
              onChange={queryChangeHandler}
            />
            <button type="submit">Search</button>
          </form>
          <MovieList movies={moviesByQuery}/>
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
