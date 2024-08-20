import React from 'react'
import './Tips.css' 
import Footer from '../components/Footer'

function Tips() {

  return (
    <div className="home-container">
      <div className="content-wrap">
        <h2 className='title'>Pet Caring Tips</h2>
        <p className='tip'>"Ensure your pet has regular check-ups with the vet."</p>
        <p className='tip'>Provide your pet with a balanced diet and fresh water daily."</p>
        <p className='tip'>"Make sure your pet gets enough exercise and playtime."</p>
        <p className='tip'> "Keep your pet's living environment clean and safe."</p>
        <p className='tip'>"Give your pet lots of love and attention."</p>
        <p className='tip'> "Brush your pet regularly to maintain a healthy coat."</p>
        <p className='tip'>  "Train your pet to follow basic commands for their safety."</p>
        <p className='tip'> "Socialize your pet with other animals and people.",</p>
        <p className='tip'> "Provide mental stimulation with toys and puzzles."</p>
        <p className='tip'> "Regularly check your pet for ticks, fleas, and other parasites."</p>
      </div>
      
      <Footer />
    </div>
  )
}

export default Tips
