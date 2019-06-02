
import { connect } from 'react-redux';
import RatingPage from 'src/components/RatingPage';
import { loadingRatings } from 'src/store/reducer';
/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({
  allcats: state.allcats,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadingRatings: () => {
    dispatch(loadingRatings());
  },
});

// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)

const RatingPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RatingPage);

export default RatingPageContainer;
