import React from 'react';
import { siteContent } from '../siteContent';
import './MarqueeStrip.css';

export default function MarqueeStrip() {
  const items = siteContent.marqueeItems || [];

  return (
    <div className="marquee-strip-wrapper" aria-hidden="true">
      <div className="marquee-track">
        {/* Double the list to create a seamless infinite loop */}
        {[...items, ...items].map((item, index) => (
          <div key={index} className="marquee-node">
            <span className="marquee-text">{item}</span>
            <span className="marquee-bullet">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
