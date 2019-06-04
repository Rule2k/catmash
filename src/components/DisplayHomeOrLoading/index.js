// import

import React from 'react';
import Homepage from 'src/containers/Homepage';
import Loading from 'src/components/Loading';
import PropTypes from 'prop-types';


// une fois le composant monté, un appel à l'API est effectué pour récupérer les infos de la DB
// si le statut loading est true, le composant de loading s'affiche, sinon la homepage est chargée

class DisplayHomeOrLoading extends React.Component {
  componentDidMount() {
    const { loadingHomePage } = this.props;
    loadingHomePage();
  }

  render() {
    const { loading } = this.props;
    return (
      loading ? <Loading /> : <Homepage />
    );
  }
}

DisplayHomeOrLoading.propTypes = {
  loadingHomePage: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};


export default DisplayHomeOrLoading;
