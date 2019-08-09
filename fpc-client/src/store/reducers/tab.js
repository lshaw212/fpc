import { LOAD_TAB, SET_TAB } from "../actionTypes";

const initialState = {tab: 'map'}

const tab = (state=initialState, action) => {
  switch(action.type){
    case LOAD_TAB:
      console.log(state);
      return {...state};
    case SET_TAB:
      console.log(state);
      return {tab: action.tab};
    default:
      return state;
  }
}

export default tab;