import React, { useState } from 'react';
import './FloatingActionButton.css';
import { assets } from '../../assets/assets';

const FloatingActionButton = ({ icon, onClick, label, color = 'primary', size = 'medium' }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed(true);
    if (onClick) onClick();
    
    // Reset pressed state after animation
    setTimeout(() => setIsPressed(false), 200);
  };

  return (
    <button
      className={`fab ${color} ${size} ${isPressed ? 'pressed' : ''}`}
      onClick={handleClick}
      aria-label={label}
    >
      <img src={icon} alt={label} />
      {label && <span className="fab-label">{label}</span>}
    </button>
  );
};

export default FloatingActionButton;


