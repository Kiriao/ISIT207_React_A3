import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ConfirmationRelease.css'; // Import CSS for styling
import Footer from '../components/Footer';

function ConfirmationRelease() {
  const { state } = useLocation();
  const navigate = useNavigate(); // Use navigate hook for programmatic navigation
  const { petName, petType, age, description, phone, email, image } = state || {};

  const handleBackClick = () => {
    navigate('/pet_release_form'); // Navigate back to the adoption page
  };

  return (
    <div className="home-container">
      <div className="content-wrap">
    <div className="confirmation-container">
      <h1>Adoption Submission Successful!</h1>
      {petName ? (
        <div className="confirmation-details">
          <h2>Thank you for putting {petName} up for adoption!</h2>
          <p><strong>Pet Name:</strong> {petName}</p>
          <p><strong>Pet Type:</strong> {petType}</p>
          <p><strong>Age:</strong> {age} years</p>
          <p><strong>Description:</strong> {description}</p>
          <p><strong>Contact Phone:</strong> {phone}</p>
          <p><strong>Contact Email:</strong> {email}</p>
          {image && <img src={URL.createObjectURL(image)} alt={petName} className="animal-image" />}
          <button onClick={handleBackClick} className="back-button">Back to Release Form</button>
        </div>
      ) : (
        <p>No pet details provided.</p>
      )}
    </div>
    </div>
      <Footer />
    </div>
  );
}

export default ConfirmationRelease;
