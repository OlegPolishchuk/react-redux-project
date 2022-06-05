import React, { FC } from 'react';

import './App.scss';
import Header from './components/Header/Header';
import Pages from './components/Pages/Pages';
import { ReturnComponentType } from './types';

const App: FC = (): ReturnComponentType => (
  <div className="App">
    <Header />
    <Pages />
  </div>
);

export default App;
