import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from 'src/components/Header';
import PropTypes from 'prop-types';

import SingleCat from './singlecat';
import './ratingpage.scss';

const RatingPage = ({ allcats }) => (
  <div id="rating">
    <Header />
    <div id="listofcats">
      {allcats.map(singlecat => (
        <SingleCat singlecat={singlecat} key={singlecat.id} />
      ))}
    </div>
    <NavLink exact to="/">
      <div className="button">
        <p>Retourner à l'accueil</p>
      </div>
    </NavLink>
  </div>
);

RatingPage.propTypes = {
  allcats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};

export default RatingPage;
