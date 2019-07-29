import { LOAD_STATIONS } from "../actionTypes";

const stations = (state=[], action) => {
  switch(action.type){
    case LOAD_STATIONS:
      return [...action.stations];
    default:
      return state;
  }
}

export default stations;