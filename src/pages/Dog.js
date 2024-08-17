import React, { useState } from 'react';
import Resource from './Resource';
import './animal.css';
import Footer from '../components/Footer';

const Dogs = () => {    
  const webURL = 'https://kiriao.github.io/Rest-API/dog.json';
  
  const [refreshKey, setRefreshKey] = useState(0);

  // Function to shuffle the array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const render = (data) => {
    if (data.loading === true) return <p>Loading...</p>;

    console.log('Got the data', data);

    // Shuffle and slice to get 9 random dogs
    const randomDogs = shuffleArray(data.trans).slice(0, 9);

    return (
      <div className='dog-grid'>
        {randomDogs.map((dog) => (
          <div key={dog.id} className='dog-item'>
            <img className='image' src={dog.url} alt={dog.name} />
            <div className='overlay'>
              <div className='dog-name'>{dog.name}</div>
              <div className='dog-des'>{dog.description || 'No description available'}</div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const handleRefresh = () => {
    setRefreshKey(prevKey => prevKey + 1);
  };

  return (
    <div className="home-container">
      <div className="content-wrap">
        <h2 className='show-animal'>Show Dogs 🐶</h2>
        <div className='button-container'>
          <button className='refresh-button' onClick={handleRefresh}>Refresh Images</button>
        </div>
        <Resource path={webURL} render={render} key={refreshKey} />
      </div>
      <Footer />
    </div>
  );
};

export default Dogs;
