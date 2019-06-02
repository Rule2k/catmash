// import

import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from 'src/store';
import App from 'src/components/App';
import { loadingHomePage, loadingRatings } from 'src/store/reducer';
import { BrowserRouter as Router } from 'react-router-dom';

// Provider du store de Redux pour l'application

const rootComponent = (
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);

const target = document.getElementById('root');

// Render(Le composant à rendre, la cible dans le DOM)

render(rootComponent, target);

// dispatch de l'action permettant de récuperer un tableau contenant 2 chats
