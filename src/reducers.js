import { combineReducers } from 'redux';

import appReducer, { storedKey as storedAppState } from '@containers/App/reducer';
import clientReducer, { storedKey as storedClientState } from '@containers/Client/reducer';
import studentReducer, { storedKey as storedStudentState } from '@pages/Home/reducer';
import getStudentReducer, { storedKey as storedGetStudentState } from '@pages/Lecturer/Student/reducer';
import getCourseReducer, { storedKey as storedGetCourseState } from '@pages/Lecturer/Course/reducer';
import getLecturerReducer, { storedKey as storedGetLecturerState } from '@pages/Lecturer/Lecturer/reducer';
import getUserDetailReducer, { storedKey as storedUserDetailState } from '@pages/Profile/reducer';
// import loginReducer, { storedKey as storedLoginState } from '@pages/Login/reducer';
import languageReducer from '@containers/Language/reducer';

import { mapWithPersistor } from './persistence';
import editReducer, { storedKey as storedEditCourseState } from '@pages/Lecturer/EditCourse/reducer';
// import getUserDetailReducer from '@pages/Profile/reducer';

const storedReducers = {
  app: { reducer: appReducer, whitelist: storedAppState },
  client: { reducer: clientReducer, whitelist: storedClientState },
  course: { reducer: getCourseReducer, whitelist: storedGetCourseState },
  student: { reducer: studentReducer, whitelist: storedStudentState },
  getStudent: { reducer: getStudentReducer, whitelist: storedGetStudentState },
  lecturer: { reducer: getLecturerReducer, whitelist: storedGetLecturerState },
  userDetail: { reducer: getUserDetailReducer, whitelist: storedUserDetailState },
  editedCourse: { reducer: editReducer, whitelist: storedEditCourseState },
  // login: { reducer: loginReducer, whitelist: storedLoginState },
};

const temporaryReducers = {
  language: languageReducer,
};

const createReducer = () => {
  const coreReducer = combineReducers({
    ...mapWithPersistor(storedReducers),
    ...temporaryReducers,
  });
  const rootReducer = (state, action) => coreReducer(state, action);
  return rootReducer;
};

export default createReducer;
