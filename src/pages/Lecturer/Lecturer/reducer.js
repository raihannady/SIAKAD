import { produce } from 'immer';

import { SET_LECTURER } from './constants';

export const initialState = {
  lecturer: [],
};

export const storedKey = ['lecturer'];

const getLecturerReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_LECTURER:
        // console.log(action, '<<<< REDUCER');
        draft.lecturer = action.lecturer;
        break;
      default:
        break;
    }
  });

export default getLecturerReducer;
