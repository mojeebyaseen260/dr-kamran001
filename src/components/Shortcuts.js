import React, { useState, useEffect } from 'react';
import './Shortcuts.css';

const Shortcuts = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto-hide shortcuts after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`shortcuts ${isVisible ? 'visible' : 'hidden'}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div>← → Arrow keys to navigate</div>
      <div>Space: Next slide</div>
      <div>F: Fullscreen</div>
    </div>
  );
};

export default Shortcuts;