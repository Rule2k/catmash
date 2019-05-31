// import

import React from 'react';
import App from 'src/components/App';
import Loading from 'src/components/Loading';

// si le statut loading est true, le composant de loading s'affiche, sinon l'application est chargée

const DisplayAppOrLoading = ({ loading, cats }) => (
  loading ? <Loading /> : <App cats={cats} />
);

export default DisplayAppOrLoading;
