import { motion } from 'framer-motion';
import { scene4PartA, scene4PartB, scene4ButtonText } from '../content/text';

export default function SceneFour({ onComplete }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="scene-four min-h-screen text-white px-6 py-10 flex flex-col items-center"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="scene-four-letter text-left"
      >
        <p>{scene4PartA}</p>
        <p>{scene4PartB}</p>
      </motion.div>
      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="scene-four-button"
        onClick={onComplete}
      >
        {scene4ButtonText}
      </motion.button>
    </motion.div>
  );
}