import { takeLatest, call, put } from 'redux-saga/effects';
import { showPopup, setLoading } from '@containers/App/actions';
import { register } from '@domain/api';
import { REGISTER } from './constants';

function* doRegister({ dataUser }) {
  yield put(setLoading(true));
  try {
    yield call(register, dataUser);
  } catch (error) {
    console.log(error);
  }
  yield put(setLoading(false));
}

export default function* registerSaga() {
  yield takeLatest(REGISTER, doRegister);
}
