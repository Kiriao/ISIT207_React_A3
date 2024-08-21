import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Slider from 'react-slick';
import '../App.css';
import './Home.css';

const Home = () => {
  const location = useLocation();
  const { username } = location.state || {};

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="home-container">
      <div className="content-wrap">
        <div className="welcome-container">
          <h1>Welcome, {username || 'Guest'} to the Pet Heaven Society!</h1>
        </div>
        <div className="video-slider-container">
          <Slider {...sliderSettings}>
            <div className="video-slide">
              <iframe
                src="https://www.youtube.com/embed/3VUytGO-BC0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-slide">
              <iframe
                src="https://www.youtube.com/embed/tNu4-G0SmRU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Slider>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
