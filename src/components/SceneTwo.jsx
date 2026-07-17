import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SceneTwo({ onComplete }) {
  const [dotClicked, setDotClicked] = useState(false);
  const [warningShown, setWarningShown] = useState(false);

  useEffect(() => {
    const warningTimer = setTimeout(() => {
      if (!dotClicked) {
        setWarningShown(true);
      }
    }, 5000);
    return () => clearTimeout(warningTimer);
  }, [dotClicked]);

  const handleDotClick = () => {
    setDotClicked(true);
    // small delay for CRT effect? we just call onComplete after short delay
    setTimeout(() => onComplete?.(), 400);
  };

  const handleWarningClick = () => {
    setWarningShown(true);
    setDotClicked(true);
    setTimeout(() => onComplete?.(), 400);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen bg-white text-black"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative w-10 h-10 bg-black rounded-full cursor-pointer"
        onClick={handleDotClick}
      >
        {warningShown && (
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs text-gray-600">
            click panna pogama enna da full la black aa maariduchu
          </span>
        )}
        {!warningShown && (
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs text-gray-600">
            ipo anga oru black dot iruku paathiya aa athu nalla ila la asingama iruku la papa that manasu white screen athu maatum, atha click pannu papa athu apo thaa pogum
          </span>
        )}
      </motion.div>
      {!dotClicked && !warningShown && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5, duration: 0.3 }}
          className="hidden mt-4 px-4 py-2 bg-gray-800 text-white rounded-full"
          onClick={handleWarningClick}
        >
          again click pannu
        </motion.button>
      )}
    </motion.div>
  );
}