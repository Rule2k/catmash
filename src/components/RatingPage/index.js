import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Header, Button, Segment
} from 'semantic-ui-react';
import SingleCat from './singlecat';
import './ratingpage.scss';

const RatingPage = ({ allcats }) => (
  <div id="rating">
    <Header as="h1">Classement des qui qui le plus beau</Header>
    <Segment id="listofcats">
      {allcats.map(singlecat => (
        <SingleCat singlecat={singlecat} />
      ))}
    </Segment>
    <NavLink exact to="/">
      <Button id="button-rating">Retourner à l'accueil</Button>
    </NavLink>
  </div>
);

export default RatingPage;
