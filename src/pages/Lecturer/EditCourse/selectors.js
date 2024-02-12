import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectEditCourseState = (state) => state.editedCourse || initialState;

export const selectEditCourse = createSelector(selectEditCourseState, (state) => {
  // console.log(state.course);
  return state.editedCourse;
});
