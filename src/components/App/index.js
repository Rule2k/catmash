// imports
import React from 'react';

import Homepage from 'src/containers/Homepage';
import NotFound from 'src/components/NotFound';
import Rating from 'src/containers/Rating';
import { Route, Switch } from 'react-router-dom';

import './app.scss';

// Parcours le tableau "cats" issu de Redux, et génère un composant Cats pour chaques itérations,
// en envoyant les détails de chaque entrée au composant enfant.

const App = () => (
  <div id="app">
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <Homepage />
        )}
      />
      <Route exact path="/classement" component={Rating} />
      <Route component={NotFound} />
    </Switch>
  </div>
);


export default App;
