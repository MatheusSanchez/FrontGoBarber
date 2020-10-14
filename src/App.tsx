import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn/index';
import SignUp from './pages/SignUp/index';
import { AuthProvider } from './hooks/AuthContext'
import ToastContainer from './components/Toast/Toast'

const App: React.FC = () => (
  <>



    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <GlobalStyle />
    <ToastContainer />
  </>
);
export default App;
