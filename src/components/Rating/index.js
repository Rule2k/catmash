import React from 'react';
import { Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const Rating = () => (
  <div id="rating">
    <p>Classement des meilleurs chats</p>
    <NavLink exact to="/">
      <Button>Retourner à l'accueil</Button>
    </NavLink>
  </div>
);


export default Rating;
