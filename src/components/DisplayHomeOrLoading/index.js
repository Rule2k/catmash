// import

import React from 'react';
import Homepage from 'src/containers/Homepage';
import Loading from 'src/components/Loading';

// une fois le composant monté, un appel à l'API est effectué pour récupérer les infos de la DB
// si le statut loading est true, le composant de loading s'affiche, sinon la homepage est chargée

class DisplayHomeOrLoading extends React.Component {
  componentDidMount() {
    this.props.loadingHomePage();
  }

  render() {
    return (
      this.props.loading ? <Loading /> : <Homepage />
    );
  }
}

export default DisplayHomeOrLoading;
