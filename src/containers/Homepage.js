
import { connect } from 'react-redux';
import Homepage from 'src/components/Homepage';

/* Envoi au composant Homepage la liste des deux chats choisis au hasard issus de la BDD
 */

const mapStateToProps = (state, ownProps) => ({
  cats: state.twocats,
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

const HomepageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Homepage);

export default HomepageContainer;
