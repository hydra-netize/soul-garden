import React from 'react';
import './Cloud.css';

export default function Cloud({ style, text, delay, onAnimationEnd }) {
  return (
    <div className="cloud" style={{ ...style, animationDelay: `${delay}s` }}>
      <div className="cloud-text" onAnimationEnd={onAnimationEnd}>
        {text}
      </div>
    </div>
  );
}