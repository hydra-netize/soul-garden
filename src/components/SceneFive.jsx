import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Cloud from './Cloud';
import Butterfly from './Butterfly';
import { cloudTexts } from '../content/text';
import './SceneFive.css';

export default function SceneFive({ onComplete }) {
  const [cloudCount, setCloudCount] = useState(0);
  const [showBlackHoleCaption, setShowBlackHoleCaption] = useState(false); // for scene6 caption?

  useEffect(() => {
    // We'll simulate cloud completion by timing? Actually, we'll have Cloud component call a callback when its fade-in animation ends.
    // But for simplicity, we'll use a timeout based on the number of clouds and their delays.
    // We have 4 clouds, each with delay: 0, 1.5, 3, 4.5 seconds (if we use index*1.5) and fadeIn duration 0.5s.
    // So the last cloud finishes at 4.5 + 0.5 = 5 seconds.
    // We'll set a timeout for 5 seconds to enable the tap.
    const timer = setTimeout(() => {
      setCloudCount(4); // assume all clouds done after 5 seconds
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    if (cloudCount >= 4) {
      // All clouds have appeared, allow transition to scene6
      onComplete();
    }
  };

  // Generate random positions for butterflies (within safe area)
  const butterflies = [];
  for (let i = 0; i < 7; i++) {
    const left = Math.random() * 80 + 10; // 10% to 90%
    const top = Math.random() * 80 + 10;  // 10% to 90%
    butterflies.push(<Butterfly key={i} style={{ left: `${left}%`, top: `${top}%` }} />);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative"
      onClick={handleClick}
      style={{
        background: 'linear-gradient(135deg, #a8e6cf, #dcedc1)', // green meadow
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Butterflies */}
      <div className="butterflies-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        {butterflies}
      </div>

      {/* Clouds */}
      <div className="clouds-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        {cloudTexts.map((text, index) => (
          <Cloud key={index} text={text} delay={index * 1.5} onAnimationEnd={() => setCloudCount(prev => Math.max(prev, index + 1))} />
        ))}
      </div>

      {/* Black Hole (visible from scene5) */}
      <div className="black-hole" style={{ position: 'absolute', bottom: '20px', right: '20px', width: '35px', height: '35px', background: 'radial-gradient(circle at center, #000 0%, rgba(0,0,0,0.7) 70%, transparent)', borderRadius: '50%', cursor: 'pointer', animation: 'pulse-hole 2s ease-in-out infinite' }}></div>

      {/* Optional: Caption for black hole in scene6? We'll handle in scene6 */}
    </motion.div>
  );
}