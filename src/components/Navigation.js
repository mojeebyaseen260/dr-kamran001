import React from 'react';
import './Navigation.css';

const Navigation = ({ currentSlide, totalSlides, onPrevious, onNext, onToggleFullscreen }) => {
  return (
    <div className="nav-controls">
      <button 
        className="nav-btn" 
        onClick={onPrevious}
        disabled={currentSlide === 0}
      >
        ← Previous
      </button>
      
      <span className="slide-counter">
        {currentSlide + 1} / {totalSlides}
      </span>
      
      <button 
        className="nav-btn" 
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
      >
        Next →
      </button>
      
      <button className="nav-btn" onClick={onToggleFullscreen}>
        ⛶ Fullscreen
      </button>
    </div>
  );
};

export default Navigation;