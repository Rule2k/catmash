import React from 'react';
import { Button, Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const Rating = () => (
  <div id="rating">
    <Header as="h1">Classement des qui qui le plus beau</Header>
    <NavLink exact to="/">
      <Button>Retourner à l'accueil</Button>
    </NavLink>
  </div>
);


export default Rating;
