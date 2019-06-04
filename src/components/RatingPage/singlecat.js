import React from 'react';
import PropTypes from 'prop-types';

const SingleCat = ({ singlecat }) => {
  const backgroundImage = {
    backgroundImage: `url(${singlecat.url})`,
  };
  return (
    <div>
      <div className="singlecat" style={backgroundImage} />
      <div>
        Score : {singlecat.score}
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
