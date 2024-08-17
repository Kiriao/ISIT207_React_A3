import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isLoggedIn, onLogout }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <h2>Pet Heaven Society</h2>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="menu-icon">&#9776;</span>
        </button>
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        {isLoggedIn && (<li><Link to="/adoption">Adoption</Link></li>)}
        {isLoggedIn && (<li><Link to="/pet_release_form">Pet Release Form</Link></li>)}
        <li><Link to="/cat">Cats</Link></li>
        <li><Link to="/dog">Dogs</Link></li>
        <li><Link to="/contactus">Contact Us</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        {!isLoggedIn && <li><Link to="/login">Login</Link></li>}
        {!isLoggedIn && <li><Link to="/signup">Sign Up</Link></li>}
        {isLoggedIn && ( <li> <Link to="/" onClick={onLogout} className="logout-link">Logout</Link> </li> )}
      </ul>
    </nav>
  );
};

export default Navbar;
