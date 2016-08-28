import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunkMiddleware  from 'redux-thunk';

//import the root reducer
import rootReducer from './reducers/index';

//create an object for the default data
const defaultState = {
  shops: [],
  
};

const enchancers = compose(
  applyMiddleware(thunkMiddleware),
   window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(rootReducer, defaultState, enchancers);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
