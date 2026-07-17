import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import Butterfly from './Butterfly';
import Mountains from './Mountains';
import Petals from './Petals';
import SceneSeven from './SceneSeven';
import './SceneSix.css';

export default function SceneSix({ onAdvance }) {
  const [modalOpen, setModalOpen] = useState(false);
  const advanceTimerRef = useRef(null);
  const advancedRef = useRef(false);

  // Ensure the auto-advance timer is cleared if the component unmounts before it fires.
  useEffect(() => {
    return () => {
      if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
    };
  }, []);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    // Close the modal immediately (SceneSeven handles its own exit animation).
    setModalOpen(false);

    // Advance to the final scene exactly once, 1.5s after the first close.
    if (advancedRef.current) return;
    advancedRef.current = true;
    advanceTimerRef.current = setTimeout(() => {
      onAdvance();
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative"
      style={{
        background: 'linear-gradient(160deg, #bce7ff 0%, #a8e6cf 50%, #dcedc1 100%)',
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
        {[...Array(7)].map((_, i) => {
          const left = Math.random() * 80 + 10;
          const top = Math.random() * 80 + 10;
          return (
            <Butterfly key={i} style={{ left: `${left}%`, top: `${top}%` }} />
          );
        })}
      </div>

      {/* Black Hole (clickable to open modal) */}
      <div
        className="black-hole"
        style={{ position: 'absolute', bottom: '20px', right: '20px', zIndex: 30 }}
        onClick={handleOpenModal}
      >
        {/* Caption near the black hole */}
        <span className="black-hole-caption">
          anga paaren corner la antha black iruku paaren ipo touch pannen atha
        </span>
      </div>

      {/* Flower Box — centred so it never clips off-screen */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="flower-box"
      >
        <div className="flower top-right" />
        <div className="flower bottom-left" />
        <div className="box-text">
          ipo paaru da thangoo antha vishiyam nee feel panala epdi iruku paaren clouds thaaa un behaviour antha green pastures and flowers and butterfly un nature and heart with no burdens emotionally
        </div>
        <div className="box-butterflies">
          <Butterfly style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)' }} />
          <Butterfly style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%) rotate(180deg)' }} />
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <SceneSeven onClose={handleCloseModal} />
        )}
      </AnimatePresence>

      {/* Grassy ground with little flowers */}
      <div className="scene-six-ground">
        {[...Array(9)].map((_, i) => (
          <span key={i} className="scene-six-flower" style={{ left: `${5 + i * 10.5}%`, animationDelay: `${i * 0.4}s` }} />
        ))}
      </div>
    </motion.div>
  );
}
