import { combineReducers } from 'redux';
import stations from './stations';
import fuel from './fuel';
import tab from './tab';
import errors from './errors';

const rootReducer = combineReducers({
  stations,
  fuel,
  tab,
  errors
})

export default rootReducer;