import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import './login.css';
import '../App.css';
import Footer from '../components/Footer';

// Set the root element for the modal (required by react-modal)
Modal.setAppElement('#root');

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('password');
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [showNewPassword, setShowNewPassword] = useState(false); // State for new password visibility
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === newPassword) {
      setIsLoggedIn(true);
      onLogin();
      navigate('/', { state: { username } }); // Pass username to the welcome page
    } else {
      alert('Invalid credentials');
    }
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (newPassword.trim() !== '') {
      setPassword(newPassword);
      setShowChangePassword(false);
      alert('Password changed successfully');
    } else {
      alert('Please enter a valid new password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/login'); // Redirect to the login page
  };

  if (isLoggedIn) {
    return (
      <div className='welcome-container'>
        <h1>Welcome to the User Page!</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div className="home-container">
      <div className="content-wrap">
        <div className='wrapper'>
          <div className="login-container">
            <h1>Login</h1>
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
              <button type="submit">Login</button>
            </form>
            <br />
            <button
              className="change-password-link"
              onClick={() => setShowChangePassword(true)}
            >
              Change Password
            </button>
            <Modal
              isOpen={showChangePassword}
              onRequestClose={() => setShowChangePassword(false)}
              contentLabel="Change Password"
              className="modal"
              overlayClassName="modal-overlay"
            >
              <h2>Change Password</h2>
              <form onSubmit={handleChangePassword}>
                <div className="update-password-container">
                  <label>New Password:</label>
                  <input
                    type={showNewPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? "Hide" : "Show"}
                  </button>
                </div>
                <button className='updatepwd' type="submit">Update Password</button>
                <button
                  type="button"
                  className="modal-close"
                  onClick={() => setShowChangePassword(false)}
                >
                  Close
                </button>
              </form>
            </Modal>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
