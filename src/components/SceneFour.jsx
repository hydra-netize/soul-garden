import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { scene4PartA, scene4PartB, scene4ButtonText } from '../content/text';

export default function SceneFour({ onComplete }) {
  useEffect(() => {
    // focus trap? not needed
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black text-white p-6 space-y-6"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-left leading-relaxed"
      >
        <p>{scene4PartA}</p>
        <p>{scene4PartB}</p>
      </motion.div>
      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="self-center px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 focus:outline-none"
        onClick={onComplete}
      >
        {scene4ButtonText}
      </motion.button>
    </motion.div>
  );
}