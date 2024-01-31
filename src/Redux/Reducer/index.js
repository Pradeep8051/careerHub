import { combineReducers } from 'redux';

import transction from './transction';
// import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  transactions: transction,
  // filter: filterReducer,
});

export default rootReducer