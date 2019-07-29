import { combineReducers } from 'redux';
import stations from './stations';
import errors from './errors';

const rootReducer = combineReducers({
  stations,
  errors
})

export default rootReducer;