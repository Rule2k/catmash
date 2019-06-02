import { connect } from 'react-redux';
import { catHasBeenClicked } from 'src/store/reducer';
import Cats from 'src/components/Cats';


const mapStateToProps = (state, ownProps) => ({});

/* Action définie dans le reducer pour incrémenter le score du chat sélectionné dans la BDD
 */

const mapDispatchToProps = (dispatch, ownProps) => ({
  catHasBeenClicked: (id) => {
    dispatch(catHasBeenClicked(id));
  },
});

// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)

const CatsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cats);

export default CatsContainer;
