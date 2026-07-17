import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Butterfly from './Butterfly';
import { finalMessage } from '../content/text';
import './SceneEight.css';

export default function SceneEight() {
  // Create a few butterflies that float softly
  const butterflies = [];
  for (let i = 0; i < 5; i++) {
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    butterflies.push(
      <Butterfly
        key={i}
        style={{
          left: `${left}%`,
          top: `${top}%`,
          position: 'absolute',
        }}
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative"
      style={{
        background: 'linear-gradient(135deg, #a8e6cf, #dcedc1)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Butterflies */}
      <div className="butterflies-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        {butterflies}
      </div>

      {/* Optional soft glow */}
      <div className="glow" style={{ position: 'absolute', top: '50%', left: '50%', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)', transform: 'translate(-50%, -50%)', pointerEvents: 'none', animation: 'pulseGlow 4s ease-in-out infinite' }}></div>

      {/* Final Message */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        className="final-message"
        style={{
          position: 'relative',
          textAlign: 'center',
          maxWidth: '80%',
          margin: '0 auto',
          padding: '2rem',
          fontFamily: '"Caveat", cursive',
          fontSize: '1.8rem',
          lineHeight: '1.8',
          color: '#2d5d2c',
          textShadow: '0 1px 2px rgba(0,0,0,0.1)',
        }}
      >
        {finalMessage}
      </motion.div>
    </motion.div>
  );
}