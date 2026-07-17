import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import Butterfly from './Butterfly';
import SceneSeven from './SceneSeven';
import './SceneSix.css';

export default function SceneSix({ onAdvance }) {
  const [showBox, setShowBox] = useState(false);
  const [boxPosition, setBoxPosition] = useState({ left: '50%', top: '50%' });
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInteractionCompleted, setModalInteractionCompleted] = useState(false);
  const [autoAdvanceTimer, setAutoAdvanceTimer] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Flower box appears after 500ms
    const timer = setTimeout(() => {
      setShowBox(true);
      const left = Math.random() * 80 + 10;
      const top = Math.random() * 80 + 10;
      setBoxPosition({ left: `${left}%`, top: `${top}%` });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    if (!modalInteractionCompleted) {
      // First interaction: set flag and schedule auto-advance after 1.5s
      setModalInteractionCompleted(true);
      // Clear any existing timer
      if (autoAdvanceTimer) {
        clearTimeout(autoAdvanceTimer);
      }
      // Set timer to call onAdvance after 1.5 seconds
      const timer = setTimeout(() => {
        onAdvance();
      }, 1500);
      setAutoAdvanceTimer(timer);
    } else {
      // Subsequent closes just close the modal
      setModalOpen(false);
    }
    // Close the modal immediately (the visual closure is handled by SceneSeven's exit animation)
    setModalOpen(false);
  };

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
        style={{ position: 'absolute', bottom: '20px', right: '20px' }}
        onClick={handleOpenModal}
      >
        {/* Caption near the black hole */}
        <span className="black-hole-caption-hole-caption">
          anga paaren corner la antha black iruku paaren ipo touch pannen atha
        </span>
      </div>

      {/* Flower Box */}
      {showBox && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="flower-box"
          style={{
            position: 'absolute',
            left: boxPosition.left,
            top: boxPosition.top,
            transform: `translate(-50%, -50%)`,
          }}
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
      )}

      {/* Modal */}
      {modalOpen && (
        <SceneSeven onClose={handleCloseModal} />
      )}
    </motion.div>
  );
}
