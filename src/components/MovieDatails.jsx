import React from 'react'
import ImageWithCheck from './ImageWithCheck/ImageWithCheck'

const MovieDatails = ({movie}) => {
  const { poster_path, release_date, title, vote_average, overview, genres } =
  movie;

  const releaseYear = new Date(release_date).getFullYear();
  const userScore = `${(vote_average * 10).toFixed(0)}%`;

  return (
    <article>
      <div>
        <ImageWithCheck
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={`${title} cover`}
          check={poster_path}
        />
      </div>
      <div>
        <h2>{`${title} (${releaseYear})`}</h2>
        <p>{`User score: ${userScore}`}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres?.map(g => g.name).join(', ')}</p>
      </div>
    </article>
  )
}

export default MovieDatails