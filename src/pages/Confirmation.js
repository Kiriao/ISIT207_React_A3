import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Confirmation.css';
import Footer from '../components/Footer';
import '../App.css';

const Confirmation = () => {
  const { state } = useLocation();
  const navigate = useNavigate(); // Use navigate hook for programmatic navigation
  const { selectedAnimal } = state;

  const handleBackClick = () => {
    navigate('/adoption'); // Navigate back to the adoption page
  };

  return (
    <div className="home-container">
      <div className="content-wrap">
    <div className="confirmation-container">
      <h1>Adoption Confirmation</h1>
      {selectedAnimal ? (
        <div className="confirmation-details">
          <h2>Congratulations on adopting {selectedAnimal.name}!</h2>
          <img src={selectedAnimal.url} alt={selectedAnimal.name} className="animal-image" />
          <button onClick={handleBackClick} className="back-button">Back to Adoption</button>
        </div>
      ) : (
        <p>No animal selected.</p>
      )}
    </div>
    </div>
      <Footer />
    </div>
  );
};

export default Confirmation;
