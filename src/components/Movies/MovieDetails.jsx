import React from 'react'
import ImageWithCheck from '../ImageWithCheck/ImageWithCheck'
import { Details, MovieInfo, ImgWrapper } from './MovieDetails.styled';
import PropTypes from 'prop-types';

const MovieDetails = ({movie}) => {
  const { poster_path, release_date, title, vote_average, overview, genres } =
  movie;

  const releaseYear = new Date(release_date).getFullYear();
  const userScore = `${(vote_average * 10).toFixed(0)}%`;

  return (
    <Details>
      <ImgWrapper>
        <ImageWithCheck
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={`${title} cover`}
          check={poster_path}
          maxWidth="500px"
        />
      </ImgWrapper>
      <MovieInfo>
        <h2>{`${title} (${releaseYear})`}</h2>
        <p>{`User score: ${userScore}`}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres?.map(g => g.name).join(', ')}</p>
      </MovieInfo>
    </Details>
  )
}

MovieDetails.propTypes = {
  movie: PropTypes.object,
};

export default MovieDetails