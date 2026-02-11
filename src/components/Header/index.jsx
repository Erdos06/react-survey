import { useNavigate } from 'react-router-dom';
import { LoggedInContext } from '../../App';
import React from 'react';

import './Header.scss';

function Header() {
  const navigate = useNavigate();

  const { isLoggedIn, setIsLoggedIn } = React.useContext(LoggedInContext);

  return (
    <header className="app-header">
      <div className="logo-container">
        <img
          src="https://startpack.ru/repository/articles/10017/cover.jpg"
          alt="Logo"
          className="logo"
        />
        <h2>React-Survey</h2>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
      </div>
      <div className="account-container">
        {isLoggedIn ? (
          <>
            <div className="create-new-survey" onClick={() => navigate('/surveys/new')}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                className="create-new-survey-image"
                viewBox="0 0 50 50">
                <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
              </svg>
              <button onClick={() => navigate('/surveys/new')} className="create-new-survey-button">
                New Survey
              </button>
            </div>

            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/user-male-circle--v1.png"
              alt="user-male-circle--v1"
            />
          </>
        ) : (
          <>
            <button onClick={() => navigate('/login')} className="header-login-button">
              Login
            </button>
            <button onClick={() => navigate('/register')} className="header-login-button">
              Sign Up
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
