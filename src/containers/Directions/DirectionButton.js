// == connect fait le lien entre le store et un composant
import { connect } from 'react-redux';
import DirectionButton from 'src/components/Directions/DirectionButton';
import { changeDirection } from 'src/actions/gradient';
// == composant de présentation

// récupére les infos utiles dans le state pour les founrnir en props du comp. de présentation
const mapStateToProps = () => { };

// mapsDispatchToProps a un 2ème paramètre (facultatif) ownProps : représente
// les props fournies au containers par son comp. parent
const mapDispatchToProps = (dispatch, ownProps) => ({
  updateDirection: () => {
    dispatch(changeDirection(ownProps.direction));
  },
});

// == création du composant containers (assistant du composant, qui va intéragir
// avec le store)

// connect(mapStateToProps, mapDispatchToProps) retourne une fonction, on appelle
// cette fonction en lui fournissant le composant, elle retourne un nouveau composant qui
// est une version enrichie du comp. initial
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DirectionButton);
