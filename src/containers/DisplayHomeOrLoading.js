import { connect } from 'react-redux';
import { loadingHomePage } from 'src/store/reducer';

import DisplayHomeOrLoading from 'src/components/DisplayHomeOrLoading';


/* Statut loading de la homepage
 */

const mapStateToProps = (state, ownProps) => ({
  loading: state.loadingHomepage,
});


/* Action définie dans le reducer pour faire appel à l'API de façon à récupérer deux chats au hasard
 */

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadingHomePage: () => {
    dispatch(loadingHomePage());
  },
});


const DisplayHomeOrLoadingContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DisplayHomeOrLoading);

export default DisplayHomeOrLoadingContainer;
