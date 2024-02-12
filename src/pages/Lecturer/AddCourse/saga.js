import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading } from '@containers/App/actions';
import { addCourse, course } from '@domain/api';
import { ADD_COURSE } from './constants';
import { setCourse } from '../Course/actions';

function* doAddCourse({ dataCourse }) {
  try {
    yield call(addCourse, dataCourse);
    const res = yield call(course);
    yield put(setCourse(res.studentList));
  } catch (error) {
    console.log(error, '<<<<<<<<<<<<<<');
  }
  yield put(setLoading(false));
}

export default function* addCourseSaga() {
  yield takeLatest(ADD_COURSE, doAddCourse);
}
