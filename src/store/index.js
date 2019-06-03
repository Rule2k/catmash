import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/store/reducer';
import middleware from './middleware';

// devtools


const appliedMiddlewares = applyMiddleware(middleware);

const enhancers = compose(appliedMiddlewares);

// createStore

const store = createStore(reducer, enhancers);

export default store;
