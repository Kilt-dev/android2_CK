import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/StartScreen.css'; // ← Import từ folder styles

const StartScreen = () => {
  const [showText, setShowText] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowText(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="start-screen">
      <div className={`fade-in-text ${showText ? 'visible' : ''}`}>
        Welcome to Premium!
      </div>

      <div className="animations">
        <div className="icon scale-icon">⭐</div>
        <div className="dots">
          <span className="dot dot1">.</span>
          <span className="dot dot2">.</span>
          <span className="dot dot3">.</span>
        </div>
      </div>

      <button className="start-button" onClick={() => navigate('/detail')}>
        Start listening
      </button>
    </div>
  );
};

export default StartScreen;
