import { EDIT_COURSE } from './constants';

export const inputCourse = (id, dataCourse) => ({
  type: EDIT_COURSE,
  id,
  dataCourse,
});
