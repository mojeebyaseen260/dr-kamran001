import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Slide from './components/Slide';
import Navigation from './components/Navigation';
import ProgressBar from './components/ProgressBar';
import Shortcuts from './components/Shortcuts';
import { slidesData } from './data/slidesData';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const totalSlides = slidesData.length;

  const changeSlide = useCallback((direction) => {
    setCurrentSlide(prev => {
      const newSlide = prev + direction;
      if (newSlide >= totalSlides) return 0;
      if (newSlide < 0) return totalSlides - 1;
      return newSlide;
    });
  }, [totalSlides]);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch(e.key) {
        case 'ArrowLeft':
          if (currentSlide > 0) changeSlide(-1);
          break;
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          if (currentSlide < totalSlides - 1) changeSlide(1);
          break;
        case 'Home':
          goToSlide(0);
          break;
        case 'End':
          goToSlide(totalSlides - 1);
          break;
        case 'f':
        case 'F':
          toggleFullscreen();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, totalSlides, changeSlide, goToSlide, toggleFullscreen]);

  // Touch/swipe support
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0 && currentSlide < totalSlides - 1) {
          changeSlide(1);
        } else if (diff < 0 && currentSlide > 0) {
          changeSlide(-1);
        }
      }
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSlide, totalSlides, changeSlide]);

  return (
    <div className="presentation-container">
      <ProgressBar current={currentSlide + 1} total={totalSlides} />
      <Shortcuts />
      
      <Slide 
        data={slidesData[currentSlide]} 
        slideNumber={currentSlide + 1}
        totalSlides={totalSlides}
      />
      
      <Navigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrevious={() => changeSlide(-1)}
        onNext={() => changeSlide(1)}
        onToggleFullscreen={toggleFullscreen}
      />
    </div>
  );
}

export default App;