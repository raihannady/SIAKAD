import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading } from '@containers/App/actions';
import { lecturer } from '@domain/api';
import { GET_LECTURER } from './constants';
import { setLecturer } from './actions';

function* doGetLecturer() {
  try {
    const response = yield call(lecturer);
    yield put(setLoading(true));
    // console.log(response, '<<<<<<<<<<<');
    yield put(setLecturer(response.lecturerList));
  } catch (error) {
    console.log(error, '<<<<<<<<<<<<<<');
  }
  yield put(setLoading(false));
}

export default function* lecturerSaga() {
  yield takeLatest(GET_LECTURER, doGetLecturer);
}
