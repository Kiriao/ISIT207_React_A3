import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PetReleaseForm.css';
import Footer from '../components/Footer';
import '../App.css';

function PetReleaseForm() {
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('dog'); // Default to 'dog'
  const [age, setAge] = useState('');
  const [description, setDescription] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the form submission, e.g., sending data to a server
    // For now, just navigate to the confirmation page with the form data
    navigate('/confirmationrelease', {
      state: {
        petName,
        petType,
        age,
        description,
        phone,
        email,
        image,
      }
    });
  };

  return (
    <div className="home-container">
      <div className="content-wrap">
    <div className="pet-release-form-container">
      <h1>Pet Release Form</h1>
      <form onSubmit={handleSubmit} className="pet-release-form">
        <div className="form-group">
          <label htmlFor="pet-name">Pet’s Name:</label>
          <input
            type="text"
            id="pet-name"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="pet-type">Pet’s Type:</label>
          <select
            id="pet-type"
            value={petType}
            onChange={(e) => setPetType(e.target.value)}
            className="form-control"
            required
          >
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="age">Age (in years):</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="form-control"
            min="0"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
            rows="4"
            required
          />
        </div>

        <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control"
            placeholder="Enter your phone number"
            maxLength="8"
            minLength="8"
            pattern="\d{8}"
            title="Phone number must be exactly 8 digits"
            required
          />

         <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
            placeholder="Enter your email address"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Upload Pet Image:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="form-control"
            required
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
    </div>
      <Footer />
    </div>
  );
}

export default PetReleaseForm;
