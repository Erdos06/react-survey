import React from 'react';
import './AuthPage.scss';
import { Value } from 'sass';
import LoginIsland from './LoginIsland.jsx';
import SignUpIsland from './SignupIsland.jsx';

function AuthPage({ signupPressed }) {
  const [isRegister, setIsRegister] = React.useState(signupPressed);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <div className="auth-page">
      <div className="image-container">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/003/689/228/small_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
          alt=""
          className="login-page-image"
        />
      </div>
      {isRegister ? (
        <SignUpIsland setIsRegister={setIsRegister} />
      ) : (
        <LoginIsland
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          setIsRegister={setIsRegister}
        />
      )}
    </div>
  );
}

export default AuthPage;
