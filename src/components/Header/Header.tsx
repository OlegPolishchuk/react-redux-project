import React from 'react';

import { NavLink } from 'react-router-dom';

import { ReturnComponentType } from '../../types';
import Nav from '../Nav/Nav';
import { PATH } from '../Pages/Pages';

import s from './Header.module.scss';

const Header: React.FC = (): ReturnComponentType => (
  <header className={s.header}>
    <div className={s.container}>
      <Nav />
      <NavLink to={PATH.LOGIN}>Login</NavLink>
    </div>
  </header>
);

export default Header;
