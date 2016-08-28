import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import shops from './shopReducer';

const rootReducer = combineReducers({
  shops,
  routing: routerReducer
});

export default rootReducer;
