import React from 'react';
import '../styles/Hero.css'; 
import heroImage from '../Images/latestHero.jpg';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Discover Your Unique Style</h1>
        <p>Explore the latest trends and find the perfect outfit for every occasion. <br/>Elevate your wardrobe with our exclusive collection.</p>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Fashion" />
      </div>
    </div>
  );
}

export default Hero;
