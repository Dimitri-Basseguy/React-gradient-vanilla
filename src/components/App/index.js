// == Import npm
import React from 'react';

// == Import
// On remplace par le composant container, qui est la version enrichie
import NbColors from 'src/containers/NbColors';
import Controls from 'src/components/Controls';
import Gradient from 'src/components/Gradient';
import Directions from 'src/components/Directions';
import Code from 'src/components/Code';

import 'src/styles/index.scss';

// == Composant
const App = () => {
  const test = '';
  return (
    <div className="app">
      <h1>Simple gradient generator</h1>
      <NbColors />
      <Controls />
      <Gradient />
      <Directions />
      <Code />
    </div>
  );
};

// == Export
export default App;
