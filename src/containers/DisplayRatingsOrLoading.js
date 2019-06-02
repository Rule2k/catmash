import { connect } from 'react-redux';
import { loadingRatings } from 'src/store/reducer';

import DisplayRatingsOrLoading from 'src/components/DisplayRatingsOrLoading';


/* Statut loading de la homepage
 */

const mapStateToProps = (state, ownProps) => ({
  loading: state.loadingRatings,
});


/* Action définie dans le reducer pour récupérer la liste de tous les chats
 */

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadingRatings: () => {
    dispatch(loadingRatings());
  },
});

// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)

const DisplayRatingsOrLoadingContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DisplayRatingsOrLoading);

export default DisplayRatingsOrLoadingContainer;
