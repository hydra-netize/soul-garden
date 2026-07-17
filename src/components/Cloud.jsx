import React from 'react';
import { motion } from 'framer-motion';
import './Cloud.css';

export default function Cloud({ style, text }) {
  // Visibility is driven by Framer Motion (JS) rather than a CSS opacity
  // animation, so the cloud is guaranteed to appear even if a CSS keyframe
  // is missed for any reason.
  return (
    <motion.div
      className="cloud"
      style={style}
      initial={{ opacity: 0, y: 26, scale: 0.88 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="cloud-puff" />
      <div className="cloud-text">{text ?? ''}</div>
    </motion.div>
  );
}