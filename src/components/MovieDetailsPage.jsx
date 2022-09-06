import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

const MovieDetailsPage = () => {
  let location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const backLink = `${location.state?.from?.pathname}${location.state?.from?.search}` ?? '/';
  console.log(backLink);

  const goBackHandler = e => {
    navigate(backLink, { replace: true });
  };

  return (
    <div>
      <button type="button" onClick={goBackHandler}>
        &larr; Go back
      </button>
      MovieDetailsPage
      <Link to="/movies/:movieId/cast">Cast</Link>
      <Link to="/movies/:movieId/reviews">Reviews</Link>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
