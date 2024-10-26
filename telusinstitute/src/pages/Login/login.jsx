/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import './login.css';

export const Login = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');
  const [username, setUsername] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    // Simple password strength check
    if (value.length < 6) {
      setStrength('weak');
    } else if (value.length >= 6 && value.length < 10) {
      setStrength('medium');
    } else if (value.length >= 10) {
      setStrength('strong');
    } else {
      setStrength('');
    }
  };

  const validateUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
  };

  const handleBlurUsername = () => {
    if (!username.includes('@') && username) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.includes('@')) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
      // Perform the login operation
      console.log('Logging in with', { username, password });
    }
  };

  // Hide password strength bar when clicking outside
  const handleClickOutside = () => {
    setStrength('');
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <Fade bottom cascade>
      <div className='wrapper'>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>

          <div className="input-box">
            <input
              type="text"
              id="username"
              required
              placeholder=" "
              value={username}
              onChange={validateUsername}
              onBlur={handleBlurUsername}
            />
            <label htmlFor="username">Username</label>
            <FaUserAlt className='icon' />
            {showAlert && <p className="alert">Username must contain @</p>}
          </div>

          <div className="input-box">
            <input
              type="password"
              id="password"
              required
              placeholder=" "
              value={password}
              onChange={handlePasswordChange}
            />
            <label htmlFor="password">Password</label>
            <FaLock className='icon' />
            {password && (
              <div className={`password-strength ${strength}`}>
                <span></span>
              </div>
            )}
            {password && (
              <p className="strength-text">
                {strength === 'weak' && 'Weak password'}
                {strength === 'medium' && 'Medium password'}
                {strength === 'strong' && 'Strong password'}
              </p>
            )}
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <br />
            <Link to="/forgot-password" className="forgot">Forgot password?</Link>
          </div>
          <button type='submit'>Login</button>
          <div className="register-link">
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </Fade>
  );
}

export default Login;
