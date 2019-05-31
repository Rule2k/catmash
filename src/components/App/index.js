// imports
import React from 'react';

import Cats from 'src/containers/Cats';
import { Divider, Grid, Segment } from 'semantic-ui-react';
import './app.scss';

// Parcours le tableau "cats" issu de Redux, et génère un composant <Cats /> pour chaques itérations,
// en envoyant les détails de chaque entrée au composant enfant.

const App = ({ cats }) => (
  <div id="app">
    <Segment>
      <Grid columns={2} relaxed="very">
        {cats.map(cat => (
          <Grid.Column>
            <Cats cat={cat} key={cat.id} />
          </Grid.Column>
        ))}
      </Grid>
      <Divider vertical>ou</Divider>
    </Segment>
  </div>
);


export default App;
