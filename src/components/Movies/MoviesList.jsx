import ImageWithCheck from 'components/ImageWithCheck/ImageWithCheck';
import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { ImgWrapper, List } from './MoviesList.styled';
import PropTypes from 'prop-types';

const MoviesList = ({movies}) => {
  let location = useLocation();

  return (
    <List>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link
            to={`/movies/${movie.id}`}
            state={{ 
              from: location,
            }}
          >
            <ImgWrapper>
              <ImageWithCheck src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} check={movie.poster_path}/>
            </ImgWrapper>
            <p>{movie.title}</p>
          </Link>
        </li>
      ))}
    </List>
  )
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MoviesList