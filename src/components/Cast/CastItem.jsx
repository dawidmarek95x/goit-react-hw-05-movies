import React from 'react';
import ImageWithCheck from '../ImageWithCheck/ImageWithCheck';

const CastItem = ({ cast }) => {
  return (
    <li key={cast.id}>
      <ImageWithCheck
        src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
        alt={cast.name}
        check={cast.profile_path}
      />
      <h3>{cast.name}</h3>
      <p>Character: {cast.character}</p>
    </li>
  );
};

export default CastItem;
