import React from 'react';
import CastItem from './CastItem';
import { Cast } from './CastList.styled';
import PropTypes from 'prop-types';

const CastList = ({ casts }) => {
  return (
    <>
      {casts?.length === 0 && (
        <p>We don't have any information about cast for this movie.</p>
      )}
      {casts?.length > 0 && (
        <Cast>
          {casts?.map(cast => (
            <CastItem key={cast.cast_id} cast={cast} />
          ))}
        </Cast>
      )}
    </>
  );
};

CastItem.propTypes ={
  casts: PropTypes.arrayOf(PropTypes.obj),
}

export default CastList;
