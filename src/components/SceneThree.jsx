import { motion } from 'framer-motion';

export default function SceneThree({ onComplete }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen bg-black text-white"
      onClick={() => {
        setTimeout(() => onComplete(), 200);
      }}
    >
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-4"
      >
        click panna pogama enna da full la black aa maariduchu
      </motion.p>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-center mb-8"
      >
        again click pannu
      </motion.p>
    </motion.div>
  );
}
