import { LOGIN } from './constants';

export const login = (dataLogin) => ({
  type: LOGIN,
  dataLogin,
});
