import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import Footer from '../components/Footer';
import '../App.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isVolunteer, setIsVolunteer] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Clear error and handle sign-up logic here
    setError('');
    console.log('Signed up:', { username, email, password, isVolunteer });

    // After sign-up, navigate to the login page
    navigate('/Login');
  };

  return (
    <div className="home-container">
      <div className="content-wrap">
        <div className='wrapper'>
          <div className="login-container">
            <h1>Register Member</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Username:</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
                  required
                />
              </div>
              <div className="password-container">
                <label>Password:</label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <div className="password-container">
                <label>Confirm Password:</label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
              <div className="checkbox-container">
                <label>
                  <input
                    type="checkbox"
                    checked={isVolunteer}
                    onChange={(e) => setIsVolunteer(e.target.checked)}
                  />
                  Be A Volunteer
                </label>
              </div>
              {error && <p className="error">{error}</p>}
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
