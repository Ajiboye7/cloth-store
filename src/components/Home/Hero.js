import React, { useState, useEffect } from 'react';
import '../styles/Hero.css'; 

const HeroSection = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="hero-container">
      <div className="hero-slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <img src={slide.image} alt={`Slide ${index + 1}`} />
            <div className="text">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="slider-navigation">
        <button className="prev-slide" onClick={prevSlide}>&lt;</button>
        <button className="next-slide" onClick={nextSlide}>&gt;</button>
      </div>
    </div>
  );
};

export default HeroSection;
