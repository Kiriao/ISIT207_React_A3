// ContactUs.js
import React from 'react';
import './ContactUs.css'; // Import the CSS file for styling
import locationImg from '../image/gps.png';
import phoneImg from '../image/phone.png';
import emailImg from '../image/email.png';
import Footer from '../components/Footer';
import '../App.css';

function ContactUs() {
  return (
    <div className="home-container">
      <div className="content-wrap">
        <div className="contact-container">
          <h1>Contact Us</h1>
          <div className="contact-items">
            <div className="contact-item">
              <img src={locationImg} alt="Location" />
              <div className="contact-info">
                <h2>Our Office</h2>
                <p>856 South Rd</p>
              </div>
            </div>
            <div className="contact-item">
              <img src={phoneImg} alt="Contact Number" />
              <div className="contact-info">
                <h2>Contact Number</h2>
                <h3>Office Hour:</h3><p>6984 3515</p>
                <h3>24 Hour:</h3><p>1800 278 6565</p>
              </div>
            </div>
            <div className="contact-item">
              <img src={emailImg} alt="Email" />
              <div className="contact-info">
                <h2>Email</h2>
                <p>info@petheavensociety.com</p>
                <h3>For Volunteer</h3>
                <p>Volunteer@petheavensociety.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
