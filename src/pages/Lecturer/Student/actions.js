import { GET_STUDENT, SET_STUDENT } from './constants';

export const getStudent = () => ({
  type: GET_STUDENT,
});

export const setStudent = (student) => ({
  type: SET_STUDENT,
  student,
});
