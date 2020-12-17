// == connect fait le lien entre le store et un composant
import { connect } from 'react-redux';

// == composant de présentation
import Gradient from 'src/components/Gradient';

const mapStateToProps = (state) => {
  return {
    firstColor: state.firstColor,
    lastColor: state.lastColor,
    direction: state.direction,
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Gradient);
