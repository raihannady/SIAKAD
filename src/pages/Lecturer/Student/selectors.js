import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectStudentState = (state) => state.getStudent || initialState;

export const selectStudent = createSelector(selectStudentState, (state) => {
  // console.log(state.student);
  return state.student;
});
