import { GET_LECTURER, SET_LECTURER } from './constants';

export const getLecturer = () => ({
  type: GET_LECTURER,
});

export const setLecturer = (lecturer) => ({
  type: SET_LECTURER,
  lecturer,
});
