import React from 'react';
import { useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useParams,
  useSearchParams,
} from 'react-router-dom';

const MoviesPage = () => {
  const params = useParams();
  let location = useLocation();
  const [searchedValue, setSearchedValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQueryHandler = e => {
    setSearchedValue(e.target.value);
  };

  const querySubmitHandler = e => {
    e.preventDefault();

    searchedValue
      ? setSearchParams({ query: searchedValue })
      : setSearchParams('');

    const query = searchParams.get('query');
    console.log(query); // tutaj pobieranie z API po query
    setSearchedValue('');
  };

  return (
    <>
      {!params.movieId && (
        <>
          <form onSubmit={querySubmitHandler}>
            <input
              type="text"
              value={searchedValue}
              onChange={searchQueryHandler}
            />
            <button type="submit">Search</button>
          </form>
          <ul>
            <li>
              <Link to={`/movies/${1}`} state={{ from: location }}>
                1
              </Link>
            </li>
            <li>
              <Link to={`/movies/${2}`} state={{ from: location }}>
                2
              </Link>
            </li>
            <li>
              <Link to={`/movies/${3}`} state={{ from: location }}>
                3
              </Link>
            </li>
          </ul>
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
