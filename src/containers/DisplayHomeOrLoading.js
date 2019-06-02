import { connect } from 'react-redux';
import { loadingHomePage } from 'src/store/reducer';

import DisplayHomeOrLoading from 'src/components/DisplayHomeOrLoading';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({
  loading: state.loadingHomepage,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadingHomePage: () => {
    dispatch(loadingHomePage());
  },
});

// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)

const DisplayHomeOrLoadingContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DisplayHomeOrLoading);

export default DisplayHomeOrLoadingContainer;
