import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading } from '@containers/App/actions';
import { course, delCourse } from '@domain/api';
import { DELETE_COURSE, GET_COURSE } from './constants';
import { setCourse } from './actions';

function* doGetCourse() {
  try {
    const response = yield call(course);
    yield put(setLoading(true));
    // console.log(response, '<<<<<<<<<<<');
    yield put(setCourse(response.studentList));
  } catch (error) {
    console.log(error, '<<<<<<<<<<<<<<');
  }
  yield put(setLoading(false));
}

function* doDeleteCourse(id) {
  try {
    yield put(setLoading(true));
    yield call(delCourse, id.id);
    console.log(id.id, 'idnya apa');
  } catch (error) {
    console.log(error);
  }
}

export default function* courseSaga() {
  yield takeLatest(GET_COURSE, doGetCourse);
  yield takeLatest(DELETE_COURSE, doDeleteCourse);
}
