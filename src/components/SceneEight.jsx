import { motion } from 'framer-motion';
import Butterfly from './Butterfly';
import Mountains from './Mountains';
import Petals from './Petals';
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
      className="min-h-screen relative flex items-center justify-center px-4"
      style={{
        background: 'linear-gradient(160deg, #bce7ff 0%, #a8e6cf 45%, #dcedc1 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Peaceful mountain range on the horizon */}
      <Mountains />

      {/* Gentle flower-petal shower */}
      <Petals count={18} />

      {/* Butterflies */}
      <div className="butterflies-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        {butterflies}
      </div>

      {/* Soft radial glow */}
      <div className="glow" style={{ position: 'absolute', top: '42%', left: '50%', width: '320px', height: '320px', background: 'radial-gradient(circle, rgba(255,255,255,0.35) 0%, transparent 70%)', transform: 'translate(-50%, -50%)', pointerEvents: 'none', animation: 'pulseGlow 4s ease-in-out infinite' }}></div>

      {/* Final Message */}
      <motion.div
        initial={{ y: 30, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ duration: 1 }}
        className="final-message"
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: 'min(600px, 88vw)',
          margin: '0 auto',
          padding: '2rem 1.75rem',
          background: 'rgba(255, 255, 255, 0.35)',
          border: '1px solid rgba(255,255,255,0.6)',
          borderRadius: '24px',
          boxShadow: '0 20px 50px rgba(70, 120, 80, 0.25)',
          backdropFilter: 'blur(3px)',
          fontFamily: '"Caveat", cursive',
          fontSize: 'clamp(1.35rem, 5vw, 1.9rem)',
          lineHeight: '1.6',
          color: '#2d5d2c',
          textShadow: '0 1px 2px rgba(255,255,255,0.5)',
        }}
      >
        {finalMessage}
        <div className="final-heart">🤍</div>
      </motion.div>

      {/* Grassy ground with little flowers */}
      <div className="scene-six-ground">
        {[...Array(9)].map((_, i) => (
          <span key={i} className="scene-six-flower" style={{ left: `${5 + i * 10.5}%`, animationDelay: `${i * 0.4}s` }} />
        ))}
      </div>

      {/* A small, deep-dark dot resting in the corner — the black memory that
          stays, but no longer takes over the whole screen */}
      <div
        className="final-black-dot"
        style={{ position: 'absolute', bottom: '20px', right: '20px', zIndex: 10 }}
      />
    </motion.div>
  );
}