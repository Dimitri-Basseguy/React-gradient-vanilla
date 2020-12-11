// == Import npm
import React from 'react';

// == Import
import NbColors from 'src/components/NbColors';
import Controls from 'src/components/Controls';
import Gradient from 'src/components/Gradient';
import Directions from 'src/components/Directions';
import Code from 'src/components/Code';
import './styles.scss';
import 'src/styles/index.scss';

// == Composant
const App = () => (
  <div className="app">
    <h1>Simple gradient generator</h1>
    <NbColors nbColors={4} />
    <Controls />
    <Gradient />
    <Directions />
    <Code />
  </div>
);

// == Export
export default App;
