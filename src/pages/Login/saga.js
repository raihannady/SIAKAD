import { takeLatest, call, put } from 'redux-saga/effects';
import { showPopup, setLoading } from '@containers/App/actions';
import { login } from '@domain/api';
import { LOGIN } from './constants';
import { setLogin, setToken } from '@containers/Client/actions';

function* doLogin({ dataLogin }) {
  yield put(setLoading(true));

  try {
    const data = yield call(login, dataLogin);
    // if (data.output.payload.statusCode === 400) {
    //   console.log(data);

    //   // yield put(showPopup({ type: 'error', message: data.output.payload.message }));
    //   return;
    // } else {
    yield put(setLogin(true));
    yield put(setToken(data.token));
    console.log(data);
    // }
  } catch (error) {
    yield put(showPopup({ type: 'error', message: 'Login Failed' }));
    console.log(error);
  }

  yield put(setLoading(false));
}

export default function* loginSaga() {
  yield takeLatest(LOGIN, doLogin);
}
