import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { ReturnComponentType } from '../../types';
import Login from '../Login/Login';
import NewPass from '../NewPass/NewPass';
import NotFound from '../NotFound/NotFound';
import PassRecovery from '../PassRecovery/PassRecovery';
import Profile from '../Profile/Profile';
import Registration from '../Registration/Registration';
import Test from '../Test/Test';

export const PATH = {
  LOGIN: '/login',
  SIGN_UP: '/signup',
  PROFILE: '/profile',
  TESTS: '/test',
  NEW_PASSWORD: '/newpassword',
  PASS_RECOVERY: '/passwordrecovery',
};

const Pages: React.FC = (): ReturnComponentType => (
  <Routes>
    <Route path={PATH.LOGIN} element={<Login />} />
    <Route path={PATH.SIGN_UP} element={<Registration />} />
    <Route path={PATH.PROFILE} element={<Profile />} />
    <Route path={PATH.TESTS} element={<Test />} />
    <Route path={PATH.NEW_PASSWORD} element={<NewPass />} />
    <Route path={PATH.PASS_RECOVERY} element={<PassRecovery />} />
    <Route path="/*" element={<NotFound />} />
  </Routes>
);

export default Pages;
