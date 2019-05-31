import { createStore, compose } from 'redux';

import reducer from 'src/store/reducer';
import middleware from './middleware';


const devTools = [
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
];

const enhancers = compose(middleware, ...devTools);

// createStore
const store = createStore(enhancers);

export default store;
