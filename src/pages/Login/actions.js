import { LOGIN, RES_LOGIN } from './constants';

export const login = (dataLogin) => ({
  type: LOGIN,
  dataLogin,
});
export const responseLogin = (response) => ({
  type: RES_LOGIN,
  response,
});
