import { motion } from 'framer-motion';
import { modalMessage } from '../content/text';
import './SceneSeven.css';

export default function SceneSeven({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="p-4 w-full flex justify-center"
      >
        <div className="modal-card relative">
          <div className="modal-text">
            {modalMessage}
          </div>
          <button
            className="modal-button"
            onClick={onClose}
          >
            seri seri podhum click here
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
