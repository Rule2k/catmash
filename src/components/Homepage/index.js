// imports
import React from 'react';
import Cats from 'src/containers/Cats';
import Header from 'src/components/Header';
import { NavLink } from 'react-router-dom';
import './homepage.scss';

// Parcours le tableau "cats" issu de Redux, et génère un composant Cats pour chaques itérations,
// en envoyant les détails de chaque entrée au composant enfant.

const Homepage = ({ cats }) => (
  <div id="homepage">
    <Header />
    <div id="segment-homepage">
      {cats.map(cat => (
        <Cats cat={cat} key={cat.id} />
      ))}
    </div>
    <div id="divider">
        VS
    </div>
    <NavLink exact to="/classement">
      <div className="button">
        <p>Découvrez le classement général</p>
        <p>de qui qui le plus beau</p>
      </div>
    </NavLink>
  </div>
);

export default Homepage;
