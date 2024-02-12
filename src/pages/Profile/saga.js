import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading } from '@containers/App/actions';
import { getUserDetail } from '@domain/api';
import { GET_USER_DETAIL } from './constants';
import { setUserDetail } from './actions';

function* doGetUserDetail() {
  try {
    const response = yield call(getUserDetail);
    yield put(setLoading(true));
    console.log(response, '<<<<<<<<<<< saga student');
    yield put(setUserDetail(response.studentList));
  } catch (error) {
    console.log(error, '<<<<<<<<<<<<<<');
  }
  yield put(setLoading(false));
}

export default function* getUserDetailSaga() {
  yield takeLatest(GET_USER_DETAIL, doGetUserDetail);
}
