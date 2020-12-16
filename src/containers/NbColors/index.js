// == connect fait le lien entre le store et un composant
import { connect } from 'react-redux';

// == composant de présentation
import NbColors from 'src/components/NbColors';

// récupére les infos utiles dans le state pour les founrnir en props du comp. de présentation
const mapStateToProps = (state) => {
  return {
    // nom de la props a remplir: élément à récupérr dans le state
    nbColors: state.nbColors,
  };
};

const mapDispatchToProps = {};

// == création du composant containers (assistant du composant, qui va intéragir
// avec le store)

// connect(mapStateToProps, mapDispatchToProps) retourne une fonction, on appelle
// cette fonction en lui fournissant le composant, elle retourne un nouveau composant qui
// est une version enrichie du comp. initial
const NbColorsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NbColors);

export default NbColorsContainer;
