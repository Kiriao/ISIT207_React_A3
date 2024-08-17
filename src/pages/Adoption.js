import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Adoption.css';
import Footer from '../components/Footer';
import '../App.css';

const Adoption = () => {
  const [animalType, setAnimalType] = useState('dog'); // Default to 'dog'
  const [animals, setAnimals] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchAnimals = async () => {
      const url = animalType === 'dog' 
        ? 'https://kiriao.github.io/Rest-API/dog.json' 
        : 'https://kiriao.github.io/Rest-API/cat.json';

      try {
        const response = await fetch(url);
        const data = await response.json();
        setAnimals(data);
        setSelectedAnimal(null); // Reset selected animal when type changes
      } catch (error) {
        console.error('Error fetching animal data:', error);
      }
    };

    fetchAnimals();
  }, [animalType]);

  const handleAnimalChange = (event) => {
    const selectedName = event.target.value;
    const animal = animals.find(animal => animal.name === selectedName);
    setSelectedAnimal(animal);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Additional validation can be added here if needed
    navigate('/Confirmation', { state: { selectedAnimal, phone, email } }); // Navigate to Confirmation page
  };

  return (
    <div className="home-container">
      <div className="content-wrap">
    <div className="adoption-container">
      <h1>Adoption Form</h1>

      <form onSubmit={handleSubmit} className="adoption-form">
        <div className="form-group">
          <label htmlFor="animal-type">Choose animal type:</label>
          <select
            id="animal-type"
            value={animalType}
            onChange={(e) => setAnimalType(e.target.value)}
            className="form-control"
          >
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="animal-select">Choose an animal:</label>
          <select
            id="animal-select"
            onChange={handleAnimalChange}
            value={selectedAnimal ? selectedAnimal.name : ''}
            className="form-control"
          >
            <option value="">Select your pet</option>
            {animals.map(animal => (
              <option key={animal.name} value={animal.name}>
                {animal.name}
              </option>
            ))}
          </select>
        </div>

        {selectedAnimal && (
          <div className="animal-details">
            <h2>{selectedAnimal.name}</h2>
            <img src={selectedAnimal.url} alt={selectedAnimal.name} className="animal-image" />
            <p>{selectedAnimal.type}</p>
          </div>
        )}

        <div className="form-group">
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
        </div>

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

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
    </div>
      <Footer />
    </div>
  );
};

export default Adoption;
