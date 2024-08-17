import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import '../App.css';

const Welcome = () => {
  const location = useLocation();
  
  const { username } = location.state || {}; // Get username from route state



  return (
    <div className="home-container">
      <div className="content-wrap">
    <div className='welcome-container'>
      <h1>Welcome, {username || 'User'}!</h1> {/* Display the username */}
      
    </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Welcome;
