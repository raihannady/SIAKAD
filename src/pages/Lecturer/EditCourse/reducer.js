// reducers/editReducer.js
import { EDIT_COURSE } from './constants';

export const initialState = {
  editedCourse: [],
};

export const storedKey = ['editedCourse'];

const editReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_COURSE:
      return {
        ...state,
        editedCourse: action.dataCourse,
      };
    default:
      return state;
  }
};

export default editReducer;
