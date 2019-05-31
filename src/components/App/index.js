/**
 * Npm import
 */
import React from 'react';

import Cats from 'src/components/Cats';
import './app.scss';

/**
 * Code
 */
const App = ({ cats }) => (
  <div id="app">
    {cats.map(cat => (
      <Cats cat={cat} />
    ))}
  </div>
);


export default App;
