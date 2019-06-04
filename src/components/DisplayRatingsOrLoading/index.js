// import

import React from 'react';
import RatingPage from 'src/containers/RatingPage';
import Loading from 'src/components/Loading';
import PropTypes from 'prop-types';


// une fois le composant monté, un appel à l'API est effectué pour récupérer les infos de la DB
// si le statut loading est true, le composant de loading s'affiche, sinon rating est chargée

class DisplayRatingsOrLoading extends React.Component {
  componentDidMount() {
    const { loadingRatings } = this.props;
    loadingRatings();
  }

  render() {
    const { loading } = this.props;
    return (
      loading ? <Loading /> : <RatingPage />
    );
  }
}

DisplayRatingsOrLoading.propTypes = {
  loadingRatings: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default DisplayRatingsOrLoading;
