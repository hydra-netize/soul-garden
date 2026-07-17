import { motion } from 'framer-motion';
import { modalMessage } from '../content/text';
import './SceneSeven.css';

export default function SceneSeven({ onClose }) {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      />
      {/* Modal Content */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="p-4"
      >
        <div className="bg-white text-black p-8 rounded-lg w-full max-w-md relative">
          <div className="modal-text">
            {modalMessage}
          </div>
          <button
            className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 focus:outline-none"
            onClick={onClose}
          >
            seri seri podhum click here
          </button>
        </div>
      </motion.div>
    </>
  );
}