import config from '@config/index';
import { merge } from 'lodash';

import request from '@utils/request';

const urls = {
  ping: 'ping.json',
  register: 'register',
  login: 'login',
  student: 'student',
  course: 'course',
  lecturer: 'lecturer',
};

export const callAPI = async (endpoint, method, header = {}, params = {}, data = {}) => {
  const defaultHeader = {
    'Content-Type': 'application/json; charset=UTF-8',
  };

  const headers = merge(defaultHeader, header);
  const options = {
    url: config.api.host + endpoint,
    method,
    headers,
    data,
    params,
  };

  return request(options).then((response) => {
    const responseAPI = response.data;
    return responseAPI;
  });
};

export const ping = () => callAPI(urls.ping, 'get');
// student
export const getStudent = () => callAPI(urls.student, 'GET');
export const student = () => callAPI(`${urls.student}/lecturer`, 'GET');
export const getUserDetail = () => callAPI(`${urls.student}/detail`, 'GET');
// lecturer
export const lecturer = () => callAPI(urls.lecturer, 'GET');
// course
export const course = () => callAPI(urls.course, 'GET');
export const delCourse = (id) => callAPI(`${urls.course}/${id}`, 'DELETE');
// api.js
export const editCourse = (id, dataCourse) => callAPI(`${urls.course}/detail/${id}`, 'PATCH', {}, dataCourse);

export const addCourse = (dataCourse) => {
  return callAPI(urls.course, 'POST', {}, {}, dataCourse);
};

// global
export const register = (dataRegister) => {
  return callAPI(urls.register, 'POST', {}, {}, dataRegister);
};
export const login = (dataLogin) => {
  return callAPI(urls.login, 'POST', {}, {}, dataLogin);
};
