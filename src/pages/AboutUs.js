import React from 'react';
import Footer from '../components/Footer';
import './aboutus.css';
import '../App.css';

const AboutUs = () => {
  return (
    <div className="home-container">
      <div className="content-wrap">
      <div className="aboutus-container">
        <h1 className='Title' >About Us</h1>
        <p>Welcome to Pet Heaven Society!</p>
        <p>
          At Pet Heaven Society, we believe every pet deserves a loving home and every family deserves the joy of a furry friend.</p>
        
        <h2 className='about-us'>Our Mission</h2>
        <p>
          Our mission is to provide a safe haven for abandoned, neglected, and surrendered animals, and to find them the perfect forever homes. We are passionate about animal welfare and work tirelessly to ensure that every pet in our care receives the love, medical attention, and support they need to thrive.
        </p>
        
        <h2 className='about-us'>What We Do</h2>
        <ul>
          <li><strong>Rescue & Rehabilitation:</strong> We rescue pets from various situations, including shelters, strays, and those in abusive environments. Our experienced team provides the necessary medical care, rehabilitation, and behavioral training to help them recover and become ready for adoption.</li>
          <li><strong>Adoption Services:</strong> We work closely with potential adopters to match them with pets that fit their lifestyles and preferences. Our thorough adoption process ensures that pets find homes where they will be loved and cared for.</li>
          <li><strong>Community Outreach:</strong> We are committed to educating the public about responsible pet ownership, promoting spaying and neutering, and advocating for animal welfare. We host events, workshops, and seminars to raise awareness and support for our cause.</li>
          <li><strong>Volunteer Opportunities:</strong> Our organization thrives thanks to the dedication of our volunteers. We offer various ways for individuals to get involved, from fostering pets to assisting with events and administrative tasks.</li>
        </ul>
        
        <h2 className='about-us'>Our Values</h2>
        <ul>
          <li><strong>Compassion:</strong> We treat every animal with kindness and respect, recognizing their individual needs and personalities.</li>
          <li><strong>Integrity:</strong> We operate with transparency and honesty, ensuring that all our practices prioritize the well-being of the animals in our care.</li>
          <li><strong>Community:</strong> We believe in the power of community and collaboration to make a difference in the lives of pets and their future families.</li>
        </ul>
        
        <h2 className='about-us'>Meet Our Team</h2>
        <p>
          Our team is made up of passionate individuals with diverse backgrounds in animal care, veterinary medicine, and nonprofit management. We work together with a shared commitment to improving the lives of animals and finding them the loving homes they deserve.
        </p>
        
        <h2 className='about-us'>Get Involved</h2>
        <p>
          Whether you’re looking to adopt, volunteer, or support us through donations, there are many ways to get involved and make a difference.</p>
        <p>
          Thank you for visiting Pet Heaven Society. Together, we can create a brighter future for animals in need!
        </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
