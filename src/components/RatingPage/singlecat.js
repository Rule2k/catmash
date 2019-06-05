import React from 'react';
import PropTypes from 'prop-types';

const SingleCat = ({ singlecat }) => {
  const backgroundImage = {
    backgroundImage: `url(${singlecat.url})`,
  };
  return (
    <div className="singlecat">
      <div className="img-of-cat" style={backgroundImage} />
      <div className="score">
        <p>Score :</p> <p>{singlecat.score}</p>
      </div>
    </div>
  );
};

SingleCat.propTypes = {
  singlecat: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
};


export default SingleCat;
