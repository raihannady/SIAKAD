import { all } from 'redux-saga/effects';

import appSaga from '@containers/App/saga';
import registerSaga from '@pages/Register/saga';
import loginSaga from '@pages/Login/saga';
import studentSaga from '@pages/Home/saga';
import addCourseSaga from '@pages/Lecturer/AddCourse/saga';
import courseSaga from '@pages/Lecturer/Course/saga';
import editCourseSaga from '@pages/Lecturer/EditCourse/saga';
import lecturerSaga from '@pages/Lecturer/Lecturer/saga';
import getStudentSaga from '@pages/Lecturer/Student/saga';
import getUserDetailSaga from '@pages/Profile/saga';

export default function* rootSaga() {
  yield all([
    appSaga(),
    registerSaga(),
    loginSaga(),
    courseSaga(),
    addCourseSaga(),
    studentSaga(),
    getStudentSaga(),
    editCourseSaga(),
    lecturerSaga(),
    getUserDetailSaga(),
  ]);
}
