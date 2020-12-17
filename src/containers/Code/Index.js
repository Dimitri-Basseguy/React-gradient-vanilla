// == connect fait le lien entre le store et un composant
import { connect } from 'react-redux';

// == composant de présentation
import Code from 'src/components/Code';

const mapStateToProps = (state) => ({
  firstColor: state.firstColor,
  lastColor: state.lastColor,
  direction: state.direction,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Code);
