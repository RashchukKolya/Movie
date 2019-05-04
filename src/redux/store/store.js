import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../redusers/rootReduser';

const middlewares = applyMiddleware(thunk);
const enhancer = composeWithDevTools(middlewares)
const store = createStore(rootReducer, enhancer);

export default store;