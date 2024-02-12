import { produce } from 'immer';

import { SET_COURSE } from './constants';

export const initialState = {
  course: [],
};

export const storedKey = ['course'];

const getCourseReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_COURSE:
        // console.log(action, '<<<< REDUCER');
        draft.course = action.course;
        break;
      default:
        break;
    }
  });

export default getCourseReducer;
