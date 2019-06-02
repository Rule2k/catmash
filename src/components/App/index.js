// imports
import React from 'react';

import DisplayHomeOrLoading from 'src/containers/DisplayHomeOrLoading';
import DisplayRatingsOrLoading from 'src/containers/DisplayRatingsOrLoading';
import NotFound from 'src/components/NotFound';
import { Route, Switch } from 'react-router-dom';

import './app.scss';

// Composant dédié au routing via react-router-dom
// 3 routes définis : "/" qui correspond à la homepage, /classement qui correspond au rating
// et la page par défaut qui est la 404

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
