// import

import React from 'react';
import Rating from 'src/containers/Rating';
import Loading from 'src/components/Loading';

// si le statut loading est true, le composant de loading s'affiche, sinon l'application est chargée

class DisplayRatingsOrLoading extends React.Component {
  componentDidMount() {
    this.props.loadingRatings();
  }

  render() {
    return (
      this.props.loading ? <Loading /> : <Rating />
    );
  }
}

export default DisplayRatingsOrLoading;
