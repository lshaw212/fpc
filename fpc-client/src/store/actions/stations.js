import { apiCall } from "../../services/api";
import { addError } from './errors';
import { LOAD_STATIONS } from '../actionTypes';

export const loadStations = stations => ({
  type: LOAD_STATIONS,
  stations
});

export const fetchStations = () => {
  return dispatch => {
    return apiCall("get", `https://uk1.ukvehicledata.co.uk/api/datapackage/FuelPriceData?v=2&api_nullitems=1&auth_apikey=${process.env.REACT_APP_API_KEY}&user_tag=&key_postcode=ab41 8aa`)
      .then(res => {
        console.log(res.Response.DataItems.FuelStationDetails.FuelStationList);
        dispatch(loadStations(res.Response.DataItems.FuelStationDetails.FuelStationList));
      })
      .catch(err => {
        console.log(err);
        dispatch(addError(err.message));
      });
  };
};