// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Composant
const Code = ({ direction, firstColor, lastColor }) => (
  <div>
    <p className="copycode">Get Css style :</p>
    <p id="cssStyle" className="code">background: linear-gradient({direction}, {firstColor}, {lastColor});</p>
  </div>
);

Code.propTypes = {
  direction: PropTypes.string.isRequired,
  firstColor: PropTypes.string.isRequired,
  lastColor: PropTypes.string.isRequired,
};

// == Export
export default Code;
