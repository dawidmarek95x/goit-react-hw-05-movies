import React from 'react';
import ImageWithCheck from '../ImageWithCheck/ImageWithCheck';
import { Item } from './CastItem.styled';
import PropTypes from 'prop-types';

const CastItem = ({ cast }) => {
  return (
    <Item>
      <div>
        <ImageWithCheck
          src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
          alt={cast.name}
          check={cast.profile_path}
        />
      </div>
      <h3>{cast.name}</h3>
      <p>Character: {cast.character}</p>
    </Item>
  );
};

CastItem.propTypes ={
  cast: PropTypes.object.isRequired,
}

export default CastItem;
