import React from 'react';
import CastItem from './CastItem';

const CastList = ({ casts }) => {
  return (
    <>
      {casts?.length === 0 && <p>We don't have any information about cast for this movie.</p>}
      {casts?.length > 0 && (
        <ul>
          {casts?.map(cast => (
            <CastItem key={cast.id} cast={cast} />
          ))}
        </ul>
      )}
    </>
  );
};

export default CastList;
