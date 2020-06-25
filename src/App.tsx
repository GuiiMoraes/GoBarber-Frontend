import React from 'react';
import GlobalStyles from './styles/global';

import SignIn from './pages/SignIn';

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
