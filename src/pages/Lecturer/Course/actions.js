import { GET_COURSE, SET_COURSE, DELETE_COURSE } from './constants';

export const getCourse = () => ({
  type: GET_COURSE,
});

export const setCourse = (course) => ({
  type: SET_COURSE,
  course,
});

export const delCourse = (id) => ({
  type: DELETE_COURSE,
  id,
});
