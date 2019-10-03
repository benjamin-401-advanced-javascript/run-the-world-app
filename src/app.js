import React from 'react';

import LoginProvider from './components/auth/context';
import Login from './components/auth/login';
import Auth from './components/auth/auth';
import Runs from './components/runs';

const App = () => {
  return (
    <LoginProvider>
      <Login />
      <Auth capability="read">
        <Runs />
      </Auth>
    </LoginProvider>
  );
};

export default App;
