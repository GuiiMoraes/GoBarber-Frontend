import React from 'react';
import GlobalStyles from './styles/global';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <SignIn />
    </>
  );
};

export default App;
