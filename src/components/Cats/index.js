import React from 'react';
import PropTypes from 'prop-types';
import Divider from './Divider';
import './cats.scss';

const Cats = ({ cat, catHasBeenClicked, index }) => {
  const handleClickOnCat = () => (catHasBeenClicked(cat.id));
  const backgroundImage = {
    backgroundImage: `url(${cat.url})`,
  };
  return (
    <div className="cats" style={backgroundImage} onClick={handleClickOnCat} />
  );
};

Cats.propTypes = {
  cat: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
  catHasBeenClicked: PropTypes.func.isRequired,
};


export default Cats;
