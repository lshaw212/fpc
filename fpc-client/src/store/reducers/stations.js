import { LOAD_STATIONS, SELECT_STATION } from "../actionTypes";

const initialState = {station_list:[], selected_station:null}

const stations = (state=initialState, action) => {
  switch(action.type){
    case LOAD_STATIONS:
      // return [...action.stations];
      return {...state, station_list:action.stations}
    case SELECT_STATION:
      return {...state, selected_station: action.station}
    default:
      return state;
  }
}

export default stations;