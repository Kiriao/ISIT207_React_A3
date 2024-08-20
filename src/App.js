import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Cats from './pages/Cat';
import Dogs from './pages/Dog';
import Adoption from './pages/Adoption';
import PetReleaseForm from './pages/PetReleaseForm';
import Confirmation from './pages/Confirmation';
import ConfirmationRelease from './pages/ConfirmationRelease';
import ContactUs from './pages/ContactUs';
import Feedback from './pages/Feedback';
import Tips from './pages/Tips';


const App = () => {
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
          <Route path="/" element={<Home />} />
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
        <Home></Home>
      </div>
    </Router>
    
  );
};

export default App;
