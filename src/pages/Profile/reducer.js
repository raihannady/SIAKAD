import { produce } from 'immer';

import { SET_USER_DETAIL } from './constants';

export const initialState = {
  userDetail: [],
};

export const storedKey = ['userDetail'];

const getUserDetailReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_USER_DETAIL:
        console.log(action, '<<<< REDUCER');
        draft.userDetail = action.userDetail;
        break;
      default:
        break;
    }
  });

export default getUserDetailReducer;
