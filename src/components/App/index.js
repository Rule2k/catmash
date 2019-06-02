// imports
import React from 'react';

import DisplayHomeOrLoading from 'src/containers/DisplayHomeOrLoading';
import DisplayRatingsOrLoading from 'src/containers/DisplayRatingsOrLoading';
import NotFound from 'src/components/NotFound';
import { Route, Switch } from 'react-router-dom';

import './app.scss';

// Parcours le tableau "cats" issu de Redux, et génère un composant Cats pour chaques itérations,
// en envoyant les détails de chaque entrée au composant enfant.

const App = () => (
  <div id="app">
    <Switch>
      <Route exact path="/" component={DisplayHomeOrLoading} />
      <Route exact path="/classement" component={DisplayRatingsOrLoading} />
      <Route component={NotFound} />
    </Switch>
  </div>
);


export default App;
