import { apiCall } from "../../services/api";
import { addError } from './errors';
import { LOAD_STATIONS } from '../actionTypes';

export const loadStations = stations => ({
  type: LOAD_STATIONS,
  stations
});

export const fetchStations = () => {
  return dispatch => {
    return apiCall("get", "/stations")
      .then(res => {
        // console.log(res);
        dispatch(loadStations(res));
      })
      .catch(err => {
        console.log(err);
        dispatch(addError(err.message));
      });
  };
};