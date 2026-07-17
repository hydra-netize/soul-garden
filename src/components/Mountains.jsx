import React from 'react';
import './Mountains.css';

// Layered mountain range with snowy caps, sitting behind the meadow for a
// calm, peaceful "somewhere far away" feeling.
export default function Mountains() {
  return (
    <div className="mountains" aria-hidden="true">
      <svg
        className="mountains-svg"
        viewBox="0 0 1200 320"
        preserveAspectRatio="xMidYMax slice"
      >
        {/* Far range */}
        <path
          className="range-far"
          d="M0,220 L180,120 L320,210 L460,90 L620,220 L760,110 L920,210 L1060,130 L1200,220 L1200,320 L0,320 Z"
        />
        {/* Near range */}
        <path
          className="range-near"
          d="M0,260 L140,180 L300,255 L440,160 L600,255 L780,175 L960,260 L1120,190 L1200,250 L1200,320 L0,320 Z"
        />
        {/* Snow caps on the near range peaks */}
        <path className="snow" d="M140,180 L110,208 L128,205 L140,215 L154,203 L170,207 Z" />
        <path className="snow" d="M440,160 L410,192 L428,188 L440,200 L455,187 L474,191 Z" />
        <path className="snow" d="M780,175 L752,205 L770,201 L782,212 L796,200 L814,204 Z" />
        <path className="snow" d="M1120,190 L1094,216 L1110,213 L1120,222 L1133,212 L1150,215 Z" />
      </svg>
    </div>
  );
}
