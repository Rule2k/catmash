import React from 'react';
import store from 'src/store/index';

import Cats from 'src/components/Cats';
import { loadingHomePage } from 'src/store/reducer';
import './app.scss';

/**
 * Code
 */
class App extends React.Component {
  componentDidMount() {
    store.dispatch(loadingHomePage());
  }

  render() {
    return (
      <Cats />
    );
  }
}

/**
 * Export
 */
export default App;
