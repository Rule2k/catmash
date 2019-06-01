// imports
import React from 'react';

import Homepage from 'src/components/Homepage';
import NotFound from 'src/components/NotFound';
import Rating from 'src/components/Rating';
import { Route, Switch } from 'react-router-dom';

import './app.scss';

// Parcours le tableau "cats" issu de Redux, et génère un composant Cats pour chaques itérations,
// en envoyant les détails de chaque entrée au composant enfant.

const App = ({ cats }) => (
  <div id="app">
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <Homepage cats={cats} />
        )}
      />
      <Route exact path="/classement" component={Rating} />
      <Route component={NotFound} />
    </Switch>
  </div>
);


export default App;
