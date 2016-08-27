import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import artists from './artistReducer';

const rootReducer = combineReducers({
  artists,
  routing: routerReducer
});

export default rootReducer;
