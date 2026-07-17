import React, { useMemo } from 'react';
import './Butterfly.css';

export default function Butterfly({ style }) {
  // Give each butterfly its own gentle rhythm so the swarm feels alive.
  const rhythm = useMemo(() => ({
    animationDuration: `${7 + Math.random() * 6}s`,
    animationDelay: `${-Math.random() * 6}s`,
  }), []);

  return <div className="butterfly" style={{ ...rhythm, ...style }} />;
}