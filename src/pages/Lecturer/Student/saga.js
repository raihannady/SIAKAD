import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading } from '@containers/App/actions';
import { getStudent } from '@domain/api';
import { GET_STUDENT } from './constants';
import { setStudent } from './actions';

function* doGetStudent() {
  try {
    const response = yield call(getStudent);
    yield put(setLoading(true));
    // console.log(response, '<<<<<<<<<<< saga student');
    yield put(setStudent(response.studentList));
  } catch (error) {
    console.log(error, '<<<<<<<<<<<<<<');
  }
  yield put(setLoading(false));
}

export default function* getStudentSaga() {
  yield takeLatest(GET_STUDENT, doGetStudent);
}
