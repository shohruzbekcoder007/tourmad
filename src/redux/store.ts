import { compose, createStore }  from 'redux'
import reducers from './reducers/index'

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//   && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducers, {}, composeEnhancers);

export default store;

