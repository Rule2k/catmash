// imports
import React from 'react';

import Cats from 'src/containers/Cats';
import {
  Divider, Grid, Segment, Header, Button
} from 'semantic-ui-react';

import './app.scss';

// Parcours le tableau "cats" issu de Redux, et génère un composant Cats pour chaques itérations,
// en envoyant les détails de chaque entrée au composant enfant.

const App = ({ cats }) => (
  <div id="app">
    <Header as="h1">Qui qui le plus beau ?</Header>
    <Segment>
      <Grid columns={2}>
        {cats.map(cat => (
          <Grid.Column key={cat.id}>
            <Cats cat={cat} key={cat.id} />
          </Grid.Column>
        ))}
      </Grid>
      <Divider vertical>ou</Divider>
    </Segment>
    <Button>Découvrez le classement général de qui qui le plus beau</Button>
  </div>
);


export default App;
