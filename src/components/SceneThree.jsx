import { motion } from 'framer-motion';
import { useMemo, useRef } from 'react';

export default function SceneThree({ onComplete }) {
  const advancedRef = useRef(false);

  const stars = useMemo(
    () => [...Array(30)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
    })),
    []
  );

  const handleClick = () => {
    if (advancedRef.current) return;
    advancedRef.current = true;
    setTimeout(() => onComplete?.(), 200);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="scene-three relative flex flex-col items-center justify-center min-h-screen text-white overflow-hidden"
      onClick={handleClick}
    >
      {stars.map((s, i) => (
        <span
          key={i}
          className="scene-three-star"
          style={{ left: s.left, top: s.top, animationDelay: s.delay }}
        />
      ))}
      <motion.div
        initial={{ y: 24, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="scene-three-card"
      >
        <p className="scene-three-line text-center mb-4">
          click panna pogama enna da full la black aa maariduchu
        </p>
        <p className="scene-three-line scene-three-line--sub text-center">
          again click pannu
        </p>
      </motion.div>
    </motion.div>
  );
}
