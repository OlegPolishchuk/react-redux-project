import React from 'react';

import { NavLink } from 'react-router-dom';

import { ReturnComponentType } from '../../types';
import { PATH } from '../Pages/Pages';

import s from './Nav.module.scss';

const Nav: React.FC = (): ReturnComponentType => (
  <nav className={s.nav}>
    <ul>
      <li>
        <NavLink to={PATH.PROFILE}>Profile</NavLink>
      </li>
      <li>
        <NavLink to={PATH.TESTS}>Test</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
