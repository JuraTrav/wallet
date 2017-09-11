import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import transactions from './Transactions';
import settings from './Settings';

export default combineReducers({
  routing: routerReducer,
  transactions,
  settings
});
