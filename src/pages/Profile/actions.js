import { GET_USER_DETAIL, SET_USER_DETAIL } from './constants';

export const getUserDetail = () => ({
  type: GET_USER_DETAIL,
});
export const setUserDetail = (userDetail) => ({
  type: SET_USER_DETAIL,
  userDetail,
});
