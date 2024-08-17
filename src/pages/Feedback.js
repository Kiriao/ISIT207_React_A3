import React, { useState } from 'react';
import './Feedback.css';  // Import the CSS file
import Footer from '../components/Footer';

// Star Rating Component
const StarRating = ({ rating, setRating }) => {
  const stars = [1, 2, 3, 4, 5];
  
  return (
    <div className="star-rating">
      {stars.map(star => (
        <span
          key={star}
          className={`star ${rating >= star ? 'filled' : ''}`}
          onClick={() => setRating(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

function Feedback() {
  // Initial feedback data with profile pictures
  const initialFeedback = [
    {
      id: 1,
      message: 'Adopting a pet has been a life-changing experience for me. My new dog brings so much joy!',
      profilePic: 'https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp',
      rating: 5
    },
    {
      id: 2,
      message: 'Our adopted cat has settled in wonderfully. The adoption process was smooth and rewarding.',
      profilePic: 'https://i.etsystatic.com/36532523/r/il/712f21/4436521427/il_300x300.4436521427_64xx.jpg',
      rating: 4
    },
    {
      id: 3,
      message: 'Adopting pets is such a great way to give them a second chance. Highly recommend it to anyone!',
      profilePic: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6c2f9e9c-9c4f-4e17-ba20-d63254808f4e/df6xgpb-48ff8901-c078-4adf-8ecf-82529fe28b18.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZjMmY5ZTljLTljNGYtNGUxNy1iYTIwLWQ2MzI1NDgwOGY0ZVwvZGY2eGdwYi00OGZmODkwMS1jMDc4LTRhZGYtOGVjZi04MjUyOWZlMjhiMTguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.YR5Ly8kp41WJmUNAIBL6e3-ElLon3KmPNPcb0LLGwrg',
      rating: 5
    }
  ];

  const [userFeedback, setUserFeedback] = useState('');
  const [rating, setRating] = useState(0); // Rating state
  const [feedbackList, setFeedbackList] = useState(initialFeedback);
  const [error, setError] = useState(''); // Error message state

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if rating is set
    if (rating === 0) {
      setError('Please select a rating before submitting.');
      return;
    }

    setError(''); // Clear error if rating is set

    // Fetch a new profile picture URL from the API
    const response = await fetch('https://picsum.photos/50?random=' + Math.random());
    const newProfilePic = response.url;

    const newFeedback = {
      id: feedbackList.length + 1,
      message: userFeedback,
      profilePic: newProfilePic, // Use the newly fetched image URL
      rating: rating
    };

    setFeedbackList([...feedbackList, newFeedback]);
    setUserFeedback('');
    setRating(0); // Reset rating
  };

  return (
    <div className="home-container">
      <div className="content-wrap">
        <div className="feedback-container">
          <h2 className='feedback'>User Feedback</h2>
          <form onSubmit={handleSubmit} className="feedback-form">
            <textarea
              value={userFeedback}
              onChange={(e) => setUserFeedback(e.target.value)}
              placeholder="Enter your feedback"
              required
              className="feedback-textarea"
            />
            <StarRating rating={rating} setRating={setRating} />
            {error && <p className="error-message">{error}</p>} {/* Display error message */}
            <button type="submit" className="feedback-button">Submit Feedback</button>
          </form>

          <h3>All Feedback</h3>
          <ul className="feedback-list">
            {feedbackList.map(item => (
              <li key={item.id} className="feedback-item">
                <img src={item.profilePic} alt="Profile" className="feedback-profile-pic" />
                <div className="feedback-content">
                  <p className='feedback-msg'>{item.message}</p>
                  <StarRating rating={item.rating} setRating={() => {}} /> {/* Read-only star rating */}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Feedback;
