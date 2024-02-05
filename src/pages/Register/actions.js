import { REGISTER } from './constants';

export const register = (dataUser) => ({
  type: REGISTER,
  dataUser,
});
