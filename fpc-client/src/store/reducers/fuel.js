import { LOAD_FUEL_TYPE, SET_FUEL_TYPE } from "../actionTypes";

const initialState = {fuelType: 'Diesel'}

const fuel = (state=initialState, action) => {
  switch(action.type){
    case LOAD_FUEL_TYPE:
      return {...state};
    case SET_FUEL_TYPE:
      return {fuelType: action.fuelType};
    default:
      return state;
  }
}

export default fuel;