import React from 'react';
import GlobalStyles from './styles/global';

import SignIn from './pages/SignIn';
/* import SignUp from './pages/SignUp'; */

import ToastContainer from './components/ToastContainer';
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>

      <ToastContainer />
      <GlobalStyles />
    </>
  );
};

export default App;
