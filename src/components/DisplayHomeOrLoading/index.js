// import

import React from 'react';
import Homepage from 'src/containers/Homepage';
import Loading from 'src/components/Loading';

// si le statut loading est true, le composant de loading s'affiche, sinon l'application est chargée

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
