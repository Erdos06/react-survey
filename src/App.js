import '@fontsource/montserrat';
import './App.css';

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import api from './api/axios';

import HomePage from './components/HomePage';
import AuthPage from './components/LoginPage';
import SurveyPage from './components/SurveyPage';
import NotFound from './components/NotFound';
import CreateSurveyPage from './components/CreateSurveyPage';
import EditSurveyPage from './components/EditSurveyPage';
import ProtectedRoute from './components/ProtectedRoute';

export const LoggedInContext = React.createContext(true);

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setIsLoggedIn(false);
        setIsLoading(false);
        return;
      }

      try {
        const response = await api.get('check/token');

        setIsLoggedIn(true);
      } catch (error) {
        console.error('Auth check failed', error);

        if (error.response && error.response.status === 401) {
          // localStorage.removeItem('token');
        }
        setIsLoggedIn(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <LoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<AuthPage signupPressed={false} />} />
          <Route path="/register" element={<AuthPage signupPressed={true} />} />
          <Route
            path="/surveys/:id"
            element={
              <ProtectedRoute>
                <SurveyPage />
              </ProtectedRoute>
            }
          />
          <Route path="/surveys/:id/change" element={<EditSurveyPage />} />
          <Route
            path="/surveys/new"
            element={
              <ProtectedRoute>
                <CreateSurveyPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LoggedInContext.Provider>
    </div>
  );
}

function checkAuth() {
  const token = localStorage.getItem('token');
  if (!token) {
    return false;
  } else {
    const response = api.get('check/token');
    return response.status === 401;
  }
}

export default App;
