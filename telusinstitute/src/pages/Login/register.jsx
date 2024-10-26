/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import './register.css'; // Include the CSS file for the form styling

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState("");

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePasswordStrength = (password) => {
    if (password.length < 6) return "weak";
    if (password.length < 10) return "medium";
    return "strong";
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const strength = validatePasswordStrength(newPassword);
    setPasswordStrength(strength);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    // Username must contain an '@'
    if (!username.includes("@")) {
      errors.username = "Username must contain '@'";
    }

    // Validate email format
    if (!validateEmail(email)) {
      errors.email = "Invalid email format";
    }

    // Confirm password match
    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    setErrors(errors);

    // If no errors, submit the form (you can add further logic here)
    if (Object.keys(errors).length === 0) {
      console.log("Form Submitted");
    }
  };

  return (
    <Fade bottom cascade>
      <div className="signup-container">
        <div className='wrapper'>
          <form onSubmit={handleFormSubmit}>
            <h1>Sign Up</h1>

            {/* Username Field */}
            <div className="input-box">
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder=" " 
              />
              <label htmlFor="username">Username</label>
              <FaUserAlt className='icon' />
              {errors.username && <p className="error">{errors.username}</p>}
            </div>

            {/* Email Field */}
            <div className="input-box">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder=" " 
              />
              <label htmlFor="email">Email</label>
              <FaEnvelope className='icon' />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            {/* Password Field */}
            <div className="input-box">
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
                placeholder=" " 
              />
              <label htmlFor="password">Password</label>
              <FaLock className='icon' />
            </div>

            {/* Password Strength Progress Bar */}
            {password && (
              <div className={`password-strength ${passwordStrength}`}>
                <span></span>
              </div>
            )}
            <p className="strength-text">
              {password && `Password Strength: ${passwordStrength}`}
            </p>

            {/* Confirm Password Field */}
            <div className="input-box">
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder=" " 
              />
              <label htmlFor="confirm-password">Confirm Password</label>
              <FaLock className='icon' />
              {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
            </div>

            <button type='submit'>Sign Up</button>
            <div className="login-link">
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p> 
            </div>
          </form>
        </div>
      </div>
    </Fade>
  );
}

export default Register;
