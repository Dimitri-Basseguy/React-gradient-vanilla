// == connect fait le lien entre le store et un composant
import { connect } from 'react-redux';
import { changeDirection } from 'src/actions/gradient';
// == composant de présentation
import DirectionButton from 'src/components/Directions';

// récupére les infos utiles dans le state pour les founrnir en props du comp. de présentation
const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => ({
  // nom de la props à remplir: fonction correspondante
  directionChange: () => {
    dispatch(changeDirection());
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
