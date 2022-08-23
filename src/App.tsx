import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login';
import { initializeApp } from 'firebase/app';
import { config } from './config/config';
import AuthRoute from './components/AuthRoute';
import HomePage from './pages/Home';

initializeApp(config.firebaseConfig);

export interface IApplicationProps {}

function App() {
  return (
    <div className="App">
      <h1>Authentication</h1>
      <Application/>
    </div>
  );
}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
      <BrowserRouter>
          <Routes>
              <Route
                  path="/"
                  element={
                      <AuthRoute>
                        <HomePage/>
                      </AuthRoute>
                  }
              />
              <Route path="/login" element={<LoginPage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
