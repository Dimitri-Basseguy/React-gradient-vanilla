// == connect fait le lien entre le store et un composant
import { connect } from 'react-redux';
import { randomFirstColor, randomLastColor } from 'src/actions/gradient';

// == composant de présentation
import Controls from 'src/components/Controls';

// récupére les infos utiles dans le state pour les founrnir en props du comp. de présentation
const mapStateToProps = () => { };
// construit les fonctions pour remplir les props qui ont besoin d'envoyer
// une action au store
const mapDispatchToProps = (dispatch) => ({
  // nom de la props à remplir: fonction correspondante
  randomColorsFirst: () => {
    dispatch(randomFirstColor());
  },
  randomColorsLast: () => {
    dispatch(randomLastColor());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Controls);
