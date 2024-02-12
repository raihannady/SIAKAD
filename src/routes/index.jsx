import MainLayout from '@layouts/MainLayout';

import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import Register from '@pages/Register';
import Login from '@pages/Login';
import SubLayout from '@layouts/SubLayout';
import AddCourse from '@pages/Lecturer/AddCourse';
import Course from '@pages/Lecturer/Course';
import EditCourse from '@pages/Lecturer/EditCourse';
import Lecturer from '@pages/Lecturer/Lecturer';
import Student from '@pages/Lecturer/Student';
import Profile from '@pages/Profile';
// import MainLayout from '@layouts/MainLayout';

const routes = [
  {
    path: '/',
    name: 'Home',
    protected: true,
    component: Home,
    layout: MainLayout,
  },
  {
    path: '/register',
    name: 'Register',
    protected: false,
    component: Register,
    layout: SubLayout,
  },
  {
    path: '/login',
    name: 'Login',
    protected: false,
    component: Login,
    layout: SubLayout,
  },
  {
    path: '/course',
    name: 'Course',
    protected: true,
    component: Course,
    layout: MainLayout,
  },
  {
    path: '/course/add-course',
    name: 'Add Course',
    protected: true,
    component: AddCourse,
    layout: MainLayout,
  },
  {
    path: '/course/edit/:id',
    name: 'Edit Course',
    protected: true,
    component: EditCourse,
    layout: MainLayout,
  },
  {
    path: '/lecturer',
    name: 'Lecturer',
    protected: true,
    component: Lecturer,
    layout: MainLayout,
  },
  {
    path: '/student',
    name: 'Student',
    protected: true,
    component: Student,
    layout: MainLayout,
  },
  {
    path: '/profile',
    name: 'Profile',
    protected: false,
    component: Profile,
    layout: MainLayout,
  },
  // {
  //   path: '/student-list',
  //   name: 'student-list',
  //   protected: false,
  //   component: StudentList,
  //   layout: MainLayout,
  // },
  { path: '*', name: 'Not Found', component: NotFound, layout: MainLayout, protected: false },
];

export default routes;
