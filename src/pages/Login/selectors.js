import { createSelector } from 'reselect';
import { initialState } from '@containers/Client/reducer';

const selectLoginState = (state) => state.login || initialState;

export const selectLogin = createSelector(selectLoginState, (state) => state.login);
export const selectToken = createSelector(selectLoginState, (state) => state.token);
