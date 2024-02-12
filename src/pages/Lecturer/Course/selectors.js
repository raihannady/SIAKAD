import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCourseState = (state) => state.course || initialState;

export const selectCourse = createSelector(selectCourseState, (state) => {
  // console.log(state.course);
  return state.course;
});
