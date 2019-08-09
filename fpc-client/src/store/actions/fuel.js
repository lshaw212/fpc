import { LOAD_FUEL_TYPE, SET_FUEL_TYPE } from '../actionTypes';
import { addError } from './errors';

export const loadFuelType = () => ({
  type: LOAD_FUEL_TYPE
});

export const setFuelType = fuelType => ({
  type: SET_FUEL_TYPE,
  fuelType
});

export const fetchFuelType = () => {
  return dispatch => {
    try {
      dispatch(loadFuelType());
    } catch (err) {
      console.log(err);
      dispatch(addError(err.message));
    }
  };
};

export const updateFuelType = (fuelType) => {
  return dispatch => {
    try {
      dispatch(setFuelType(fuelType));
    } catch(err) {
      console.log(err);
      dispatch(addError(err.message));
    }
  }
}