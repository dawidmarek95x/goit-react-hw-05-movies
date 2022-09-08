import React from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import useFetchMoviesById from '../hooks/useFetchMoviesById';
import Loader from './Loader';
import MovieDatails from './MovieDatails';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { movie, loading } = useFetchMoviesById(movieId);

  const backLink =
    `${location.state?.from?.pathname}${location.state?.from?.search}` ??
    '/movies';

  const goBackHandler = e => {
    navigate(backLink, { replace: true });
  };

  return (
    <section>
      <button type="button" onClick={goBackHandler}>
        &larr; Go back
      </button>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MovieDatails movie={movie}/>
          <div>
            <p>Aditional information</p>
            <ul>
              <li>
                <Link to="cast" state={location.state}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to="reviews" state={location.state}>
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </>
      )}
    </section>
  );
};

export default MovieDetailsPage;
