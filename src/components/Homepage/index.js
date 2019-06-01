// imports
import React from 'react';

import Cats from 'src/containers/Cats';
import {
  Divider, Grid, Segment, Header, Button,
} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

// Parcours le tableau "cats" issu de Redux, et génère un composant Cats pour chaques itérations,
// en envoyant les détails de chaque entrée au composant enfant.

const Homepage = ({ cats }) => (
  <div id="homepage">
    <Header as="h1">Qui qui le plus beau ?</Header>
    <Segment>
      <Grid columns={2}>
        {cats.map(cat => (
          <Grid.Column key={cat.id}>
            <Cats cat={cat} key={cat.id} />
          </Grid.Column>
        ))}
      </Grid>
      <Divider id="divider" vertical>VS</Divider>
    </Segment>
    <NavLink exact to="/classement">
      <Button>Découvrez le classement général de qui qui le plus beau</Button>
    </NavLink>
  </div>
);


export default Homepage;
