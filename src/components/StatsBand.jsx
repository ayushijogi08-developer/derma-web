import React from 'react';
import { siteContent } from '../siteContent';
import './StatsBand.css';

export default function StatsBand() {
  const stats = siteContent.stats || [];

  return (
    <section className="stats-band-section" aria-label="Clinic achievements and statistics">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card reveal-item">
              <span className="stat-number">{stat.value}</span>
              <div className="stat-meta">
                <span className="stat-label">{stat.label}</span>
                <span className="stat-sub">{stat.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
