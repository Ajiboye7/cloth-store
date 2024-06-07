import React from 'react';
import '../styles/Hero.css'; 
import heroImage from '../Images/Hero2.jpg';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Discover Your Unique Style</h1>
        <p>Explore the latest trends and find the perfect outfit for every occasion. Whether it's a casual day out or a special event, discover the ideal ensemble that reflects your style and personality. Elevate your wardrobe with our exclusive collection, curated to inspire confidence and sophistication in every step.</p>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Fashion" />
      </div>
    </div>
  );
}

export default Hero;
