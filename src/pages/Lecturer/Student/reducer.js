import { produce } from 'immer';

import { SET_STUDENT } from './constants';

export const initialState = {
  student: [],
};

export const storedKey = ['student'];

const getStudentReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_STUDENT:
        // console.log(action, '<<<< REDUCER');
        draft.student = action.student;
        break;
      default:
        break;
    }
  });

export default getStudentReducer;
