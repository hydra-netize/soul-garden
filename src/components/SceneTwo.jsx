import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function SceneTwo({ onComplete }) {
  const [dotClicked, setDotClicked] = useState(false);
  const [warningShown, setWarningShown] = useState(false);
  const advancedRef = useRef(false);

  useEffect(() => {
    const warningTimer = setTimeout(() => {
      if (!dotClicked) {
        setWarningShown(true);
      }
    }, 5000);
    return () => clearTimeout(warningTimer);
  }, [dotClicked]);

  const advance = () => {
    if (advancedRef.current) return;
    advancedRef.current = true;
    setTimeout(() => onComplete?.(), 400);
  };

  const handleDotClick = () => {
    setDotClicked(true);
    advance();
  };

  const handleWarningClick = () => {
    setWarningShown(true);
    setDotClicked(true);
    advance();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="scene-two flex flex-col items-center justify-center min-h-screen text-black"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="scene-two-dot relative w-11 h-11 bg-black rounded-full cursor-pointer"
        onClick={handleDotClick}
      >
        {warningShown && (
          <span className="scene-two-caption absolute -top-12 left-1/2 -translate-x-1/2 text-center">
            click panna pogama enna da full la black aa maariduchu
          </span>
        )}
        {!warningShown && (
          <span className="scene-two-caption absolute -top-24 left-1/2 -translate-x-1/2 text-center">
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