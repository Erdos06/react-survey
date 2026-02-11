import '@fontsource/montserrat';
import './App.css';

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import AuthPage from './components/LoginPage';
import SurveyPage from './components/SurveyPage';
import NotFound from './components/NotFound';
import CreateSurveyPage from './components/CreateSurveyPage';
import EditSurveyPage from './components/EditSurveyPage';

export const LoggedInContext = React.createContext(true);

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  return (
    <div className="App">
      <LoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<AuthPage signupPressed={false} />} />
          <Route path="/register" element={<AuthPage signupPressed={true} />} />
          <Route path="/surveys/:id" element={<SurveyPage />} />
          <Route path="/surveys/:id/change" element={<EditSurveyPage />} />
          <Route path="/surveys/new" element={<CreateSurveyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LoggedInContext.Provider>
    </div>
  );
}

export default App;
