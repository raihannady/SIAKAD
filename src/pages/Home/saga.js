import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading } from '@containers/App/actions';
import { student } from '@domain/api';
import { GET_STUDENT } from './constants';
import { setStudent } from './actions';

function* doGetStudent() {
  try {
    const response = yield call(student);
    yield put(setLoading(true));
    // console.log(response.studentLecturerList, '<<<<<<<<<<<');
    yield put(setStudent(response.studentLecturerList));
  } catch (error) {
    console.log(error, '<<<<<<<<<<<<<<');
  }
  yield put(setLoading(false));
}

export default function* studentSaga() {
  yield takeLatest(GET_STUDENT, doGetStudent);
}
