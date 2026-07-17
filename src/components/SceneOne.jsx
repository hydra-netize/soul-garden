import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { scene1Lines } from '../content/text';

export default function SceneOne({ onComplete }) {
  // Which line is currently being typed (0 = first, 1 = second, 2 = done).
  const [stage, setStage] = useState(0);
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const advancedRef = useRef(false);

  // Robust typewriter: derive the visible text from a single index using slice()
  // (never appending single characters), so React StrictMode's double-invoke in
  // dev can't drop or duplicate letters. Each line types fully, then waits for a tap.
  useEffect(() => {
    if (stage > 1) return;
    const full = scene1Lines[stage];
    const setter = stage === 0 ? setLine1 : setLine2;
    let i = 0;
    setter('');
    const id = setInterval(() => {
      i += 1;
      setter(full.slice(0, i));
      if (i >= full.length) clearInterval(id);
    }, 45);
    return () => clearInterval(id);
  }, [stage]);

  const line1Done = line1 === scene1Lines[0];
  const line2Done = line2 === scene1Lines[1];
  const bothDone = stage === 1 && line2Done;

  const handleTap = () => {
    if (stage === 0) {
      if (!line1Done) {
        setLine1(scene1Lines[0]); // first tap finishes line 1 instantly
      } else {
        setStage(1); // reveal line 2
      }
      return;
    }
    if (stage === 1) {
      if (!line2Done) {
        setLine2(scene1Lines[1]); // finish line 2 instantly
      } else if (!advancedRef.current) {
        advancedRef.current = true;
        onComplete?.();
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleTap}
      className="scene-one flex flex-col items-center justify-center min-h-screen px-6 cursor-pointer select-none"
    >
      <div className="scene-one-inner">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="scene-one-line"
        >
          {line1}
          {stage === 0 && line1 && <span className="caret" />}
        </motion.p>
        {stage >= 1 && (
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="scene-one-line scene-one-line--second"
          >
            {line2}
            {stage === 1 && !line2Done && <span className="caret" />}
          </motion.p>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="tap-continue"
        key={bothDone ? 'go' : 'next'}
      >
        {bothDone ? 'tap to begin ✨' : 'tap to continue'}
      </motion.div>
    </motion.div>
  );
}
