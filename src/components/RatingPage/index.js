import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Header, Button,
} from 'semantic-ui-react';
import SingleCat from './singlecat';
import './singlecat.scss';

const RatingPage = ({ allcats }) => {
  return (
    <div id="rating">
      <Header as="h1">Classement des qui qui le plus beau</Header>
      <div id="listofcats">
        {allcats.map(singlecat => (
          <SingleCat singlecat={singlecat} />
        ))}
      </div>
      <NavLink exact to="/">
        <Button>Retourner à l'accueil</Button>
      </NavLink>
    </div>
  );
};


export default RatingPage;
