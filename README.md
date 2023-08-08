1. https://redux.js.org/
2. https://github.com/reduxjs/redux-devtools/tree/main/extension#installation

- import { createStore, applyMiddleware, compose } from 'redux';

const composeEnhancers = window.**REDUX_DEVTOOLS_EXTENSION_COMPOSE** || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

3. npm i react-redux redux
4. npm i redux-thunk
