import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from './Home';
import AboutUs from './AboutUs';
import Login from './Login';
import SignUp from './SignUp';
import Cats from './Cat';
import Dogs from './Dog';
import Adoption from './Adoption';
import PetReleaseForm from './PetReleaseForm';
import Confirmation from './Confirmation';
import ConfirmationRelease from '/ConfirmationRelease';
import ContactUs from './ContactUs';
import Feedback from './Feedback';
import Tips from './Tips';
import App from '../App';


const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <div className="container">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/adoption" element={<Adoption onLogin={handleLogin} />} />
          <Route path="/pet_release_form" element={<PetReleaseForm onLogin={handleLogin} />} />
          <Route path="/cat" element={<Cats />} />
          <Route path="/dog" element={<Dogs />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/confirmationrelease" element={<ConfirmationRelease />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Home;
