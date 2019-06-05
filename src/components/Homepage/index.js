// imports
import React from 'react';
import PropTypes from 'prop-types';
import Cats from 'src/containers/Cats';
import Header from 'src/components/Header';
import { NavLink } from 'react-router-dom';
import Divider from './Divider';

import './homepage.scss';

const Homepage = ({ cats }) => {
  // Parcours le tableau "cats" issu de Redux, et génère un composant Cats pour chaques itérations,
  // en envoyant les détails de chaque entrée au composant enfant.
  // ajoute ensuite le divider dans ce tableau afin de le mettre au milieu des deux chats
  const elements = [];
  cats.map(cat => (
    elements.push(<Cats cat={cat} key={cat.id} />)
  ));
  elements.splice(1, 0, <Divider key="divider" />);
  return (
    <div id="homepage">
      <Header />
      <div id="segment-homepage">
        {elements}
      </div>
      <NavLink exact to="/classement">
        <div className="button">
          <p>Découvrez le classement général</p>
          <p>de qui qui le plus beau</p>
        </div>
      </NavLink>
    </div>
  );
};

// Parcours le tableau "cats" issu de Redux, et génère un composant Cats pour chaques itérations,
// en envoyant les détails de chaque entrée au composant enfant.

Homepage.propTypes = {
  cats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};


export default Homepage;
