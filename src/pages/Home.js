// Home.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import '../App.css';
import './Home.css';

const Home = () => {
  const location = useLocation();
  const { username } = location.state || {};

  return (
    <div className="home-container">
      <div className="content-wrap">
        <div className="welcome-container">
          <h1>Welcome, {username || 'Guest'} to the Pet Heaven Society!</h1>
        </div>
        <div className="video-container">
          <video
            src="https://www.shutterstock.com/shutterstock/videos/3410866093/preview/stock-footage-homeless-stray-dogs-in-cage-at-animal-shelter-abandoned-animals.webm"
            controls
            autoPlay
            loop
            muted
            className="main-video"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
