import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ current, total }) => {
  const progress = (current / total) * 100;
  
  return (
    <div 
      className="progress-bar" 
      style={{ width: `${progress}%` }}
    />
  );
};

export default ProgressBar;