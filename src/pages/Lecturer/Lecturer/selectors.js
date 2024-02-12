import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectLecturerState = (state) => state.lecturer || initialState;

export const selectLecturer = createSelector(selectLecturerState, (state) => {
  // console.log(state.lecturer);
  return state.lecturer;
});
