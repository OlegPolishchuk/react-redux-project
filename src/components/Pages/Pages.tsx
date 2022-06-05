import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { ReturnComponentType } from '../../types';
import Login from '../Login/Login';

export const PATH = {
  LOGIN: '/login',
  SIGN_UP: '/signup',
  PROFILE: '/profile',
  TESTS: '/test',
};

const Pages: React.FC = (): ReturnComponentType => (
  <Routes>
    <Route path={PATH.LOGIN} element={<Login />} />
    <Route path={PATH.SIGN_UP} element={<div>Sign up</div>} />
    <Route path={PATH.PROFILE} element={<div>Profile</div>} />
    <Route path={PATH.TESTS} element={<div>Test</div>} />
  </Routes>
);

export default Pages;
