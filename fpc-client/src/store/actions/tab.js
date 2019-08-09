import { LOAD_TAB, SET_TAB } from '../actionTypes';
import { addError } from './errors';

export const loadTab = () => ({
  type: LOAD_TAB
});

export const setTab = tab => ({
  type: SET_TAB,
  tab
});

export const fetchTab = () => {
  return dispatch => {
    try {
      dispatch(loadTab());
    } catch (err) {
      console.log(err);
      dispatch(addError(err.message));
    }
  };
};

export const updateTab = (tab) => {
  return dispatch => {
    try {
      dispatch(setTab(tab));
    } catch(err) {
      console.log(err);
      dispatch(addError(err.message));
    }
  }
}