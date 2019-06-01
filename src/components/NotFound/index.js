import React from 'react';
import { Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const NotFound = () => (
  <div id="notFound">
    <p>404</p>
    <NavLink exact to="/">
      <Button>Retourner à l'accueil</Button>
    </NavLink>
  </div>
);


export default NotFound;
