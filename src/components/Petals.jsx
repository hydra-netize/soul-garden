import React, { useMemo } from 'react';
import './Petals.css';

// A soft, continuous shower of flower petals drifting down the screen.
export default function Petals({ count = 16 }) {
  const petals = useMemo(
    () =>
      [...Array(count)].map((_, i) => ({
        left: `${Math.random() * 100}%`,
        size: 10 + Math.random() * 12,
        duration: 8 + Math.random() * 8,
        delay: -Math.random() * 12,
        sway: 20 + Math.random() * 40,
        hue: i % 3, // three petal colours
      })),
    [count]
  );

  return (
    <div className="petals-container" aria-hidden="true">
      {petals.map((p, i) => (
        <span
          key={i}
          className={`petal petal--${p.hue}`}
          style={{
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            '--sway': `${p.sway}px`,
          }}
        />
      ))}
    </div>
  );
}
