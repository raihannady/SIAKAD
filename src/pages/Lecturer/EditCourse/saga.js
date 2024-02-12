import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading } from '@containers/App/actions';
import { editCourse } from '@domain/api';
import { EDIT_COURSE } from './constants';

function* doEditCourse({ id, dataCourse }) {
  try {
    console.log(dataCourse, '<<<<<<<<<<< edit course');
    const res = yield call(editCourse, id, dataCourse); // tambahkan id sebagai argumen
    console.log(res);
  } catch (error) {
    console.log(error, '<<<<<<<<<<<<<<');
  }
  yield put(setLoading(false));
}

export default function* editCourseSaga() {
  yield takeLatest(EDIT_COURSE, doEditCourse);
}
