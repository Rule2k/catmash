
import { connect } from 'react-redux';
import RatingPage from 'src/components/RatingPage';
import { loadingRatings } from 'src/store/reducer';

/* Envoi au composant RatingPage la liste de tous les chats issus de la BDD
 */

const mapStateToProps = (state, ownProps) => ({
  allcats: state.allcats,
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  loadingRatings: () => {
    dispatch(loadingRatings());
  },
});


const RatingPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RatingPage);

export default RatingPageContainer;
