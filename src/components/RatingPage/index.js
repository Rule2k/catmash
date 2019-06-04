import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from 'src/components/Header';

import { Button, Segment } from 'semantic-ui-react';
import SingleCat from './singlecat';
import './ratingpage.scss';

const RatingPage = ({ allcats }) => (
  <div id="rating">
    <Header />
    <Segment id="listofcats">
      {allcats.map(singlecat => (
        <SingleCat singlecat={singlecat} key={singlecat.id} />
      ))}
    </Segment>
    <NavLink exact to="/">
      <div className="button">Retourner à l'accueil</div>
    </NavLink>
  </div>
);

export default RatingPage;
