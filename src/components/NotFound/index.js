import React from 'react';
import { Button, Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const NotFound = () => (
  <div id="notFound">
    <Header as="h1">Oui, y'a bien une 404...</Header>
    <NavLink exact to="/">
      <Button>Retourner à l'accueil</Button>
    </NavLink>
  </div>
);


export default NotFound;
