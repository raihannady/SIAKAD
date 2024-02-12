import { ADD_COURSE } from './constants';

export const inputCourse = (dataCourse) => ({
  type: ADD_COURSE,
  dataCourse,
});
