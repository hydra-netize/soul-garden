import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { scene1Lines } from '../content/text';

export default function SceneOne({ onComplete }) {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');

  useEffect(() => {
    let i = 0;
    const timer1 = setInterval(() => {
      if (i < scene1Lines[0].length) {
        setLine1(prev => prev + scene1Lines[0][i]);
        i++;
      } else {
        clearInterval(timer1);
        setTimeout(() => {
          let j = 0;
          const timer2 = setInterval(() => {
            if (j < scene1Lines[1].length) {
              setLine2(prev => prev + scene1Lines[1][j]);
              j++;
            } else {
              clearInterval(timer2);
              setTimeout(() => onComplete?.(), 800);
            }
          }, 50);
        }, 1200);
      }
    }, 50);

    return () => {
      clearInterval(timer1);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen bg-white text-black"
    >
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-4"
      >
        {line1}
      </motion.p>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-center mb-8"
      >
        {line2}
      </motion.p>
    </motion.div>
  );
}
