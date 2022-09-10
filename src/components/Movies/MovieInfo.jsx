import React from 'react';
import { useLocation } from 'react-router-dom';
import { InfoLink, InfoList } from './MovieInfo.styled';

const MovieInfo = () => {
  const location = useLocation();

  return (
    <div>
      <h3>Aditional information</h3>
      <InfoList>
        <li>
          <InfoLink to="cast" state={location.state}>
            Cast
          </InfoLink>
        </li>
        <li>
          <InfoLink to="reviews" state={location.state}>
            Reviews
          </InfoLink>
        </li>
      </InfoList>
    </div>
  );
};

export default MovieInfo;