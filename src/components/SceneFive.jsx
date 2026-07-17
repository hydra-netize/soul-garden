import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import Cloud from './Cloud';
import Butterfly from './Butterfly';
import Mountains from './Mountains';
import Petals from './Petals';
import { cloudTexts } from '../content/text';
import './SceneFive.css';

export default function SceneFive({ onComplete }) {
  // Start with the first cloud already visible; each tap reveals the next one,
  // and once all are shown a final tap advances. Fully tap-driven so nothing
  // ever flashes past before it can be read.
  const [visibleCount, setVisibleCount] = useState(1);
  const advancedRef = useRef(false);

  const allCloudsShown = visibleCount >= cloudTexts.length;

  const handleClick = () => {
    if (!allCloudsShown) {
      setVisibleCount((c) => Math.min(c + 1, cloudTexts.length));
      return;
    }
    if (!advancedRef.current) {
      advancedRef.current = true;
      onComplete();
    }
  };

  // Scattered but non-overlapping positions for the four clouds. The final,
  // longer message gets a wider cloud so the whole paragraph stays readable.
  const cloudLayout = [
    { top: '8%', left: '6%', width: 'min(230px, 62vw)' },
    { top: '14%', left: '50%', width: 'min(230px, 62vw)' },
    { top: '38%', left: '8%', width: 'min(230px, 62vw)' },
    { top: '48%', left: '26%', width: 'min(340px, 86vw)' },
  ];

  // Generate random positions for butterflies (within safe area)
  const butterflies = [];
  for (let i = 0; i < 7; i++) {
    const left = Math.random() * 80 + 10; // 10% to 90%
    const top = Math.random() * 60 + 5;   // keep above the grass
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
        background: 'linear-gradient(160deg, #bce7ff 0%, #a8e6cf 50%, #dcedc1 100%)', // sky to green meadow
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Peaceful mountain range on the horizon */}
      <Mountains />

      {/* Gentle flower-petal shower */}
      <Petals count={16} />

      {/* Butterflies */}
      <div className="butterflies-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        {butterflies}
      </div>

      {/* Clouds — mounted progressively so each one drifts in on its turn */}
      <div className="clouds-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 6 }}>
        {cloudTexts.map((text, index) => {
          if (index >= visibleCount) return null;
          const pos = cloudLayout[index] || { top: '30%', left: '30%', width: 'min(230px, 62vw)' };
          return (
            <Cloud
              key={index}
              text={text}
              style={{ top: pos.top, left: pos.left, width: pos.width }}
            />
          );
        })}
      </div>

      {/* Grassy ground with little flowers */}
      <div className="meadow-ground">
        {[...Array(9)].map((_, i) => (
          <span key={i} className="meadow-flower" style={{ left: `${5 + i * 10.5}%`, animationDelay: `${i * 0.4}s` }} />
        ))}
      </div>

      {/* Gentle tap hint — reveal next cloud, or continue once all are shown */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="tap-hint"
        key={allCloudsShown ? 'go' : visibleCount}
      >
        {allCloudsShown ? '✨ tap anywhere to continue ✨' : 'tap to see more ☁️'}
      </motion.div>

      {/* Black Hole (visible from scene5) */}
      <div className="black-hole" style={{ position: 'absolute', bottom: '20px', right: '20px', width: '44px', height: '44px', background: 'radial-gradient(circle at 42% 38%, #000 0%, #000 70%, #050505 100%)', borderRadius: '50%', cursor: 'pointer', boxShadow: '0 0 0 3px rgba(0,0,0,0.18), 0 6px 18px rgba(0,0,0,0.6), inset 0 0 8px rgba(0,0,0,0.95)', animation: 'pulse-hole 2s ease-in-out infinite' }}></div>

      {/* Optional: Caption for black hole in scene6? We'll handle in scene6 */}
    </motion.div>
  );
}