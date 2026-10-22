import React, { useMemo } from 'react';
import { siteContent } from '../siteContent';
import ImageSlot from './ImageSlot';
import { Star, Clock, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  // Get today's hours dynamically based on current day
  const todayInfo = useMemo(() => {
    const todayIndex = new Date().getDay(); // 0 is Sunday
    const currentDayObj = siteContent.hours.find(h => h.dayIndex === todayIndex);
    return currentDayObj || siteContent.hours[0];
  }, []);

  return (
    <section className="hero-section" id="hero">
      <div className="container hero-container">
        
        {/* Left Column: Full Impact Editorial Copy */}
        <div className="hero-content reveal-item">
          
          <div className="hero-chips-row">
            <span className="hero-chip">
              <span className="chip-dot" />
              Skin · Hair · Laser — Akola
            </span>
            <span className="hero-chip hero-chip-highlight">
              <Clock size={13} strokeWidth={1.5} />
              Today: {todayInfo.isOpen ? todayInfo.hours : 'Closed'}
            </span>
          </div>

          <h1 className="hero-headline">
            Considered care for your <span className="hero-headline-italic">skin</span> and hair.
          </h1>

          <p className="hero-subtext">
            Specialized dermatological consultations, gentle aesthetic lasers, and restorative hair therapies guided by Dr. Shruti Kale (Dabholkar) in Jatharpeth.
          </p>

          <div className="hero-ctas">
            <a href="#appointment-form" className="btn btn-primary hero-btn-main">
              <span>Book Appointment</span>
              <ArrowRight size={17} strokeWidth={1.5} />
            </a>
            <a href="#concerns" className="btn btn-outline hero-btn-sub">
              <span>Find Your Treatment</span>
              <Sparkles size={16} strokeWidth={1.5} />
            </a>
          </div>

          {/* Floating Info Chips / Trust Row */}
          <div className="hero-proof-row">
            <div className="rating-badge">
              <div className="stars-cluster" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="var(--color-accent)" stroke="var(--color-accent)" />
                ))}
              </div>
              <span className="rating-score">{siteContent.proof.rating}</span>
            </div>
            <div className="proof-divider" />
            <a 
              href={siteContent.location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="proof-link"
              title="Read verified Google reviews"
            >
              <span>{siteContent.proof.reviewCount} Google reviews</span>
              <span className="proof-arrow">↗</span>
            </a>
            <div className="proof-divider" />
            <div className="doctor-tag">
              <ShieldCheck size={16} strokeWidth={1.5} className="doctor-tag-icon" />
              <span>Dr. Shruti Kale</span>
            </div>
          </div>

        </div>

        {/* Right Column: Full-Height Arched Editorial Photograph */}
        <div className="hero-visual reveal-item">
          <div className="hero-image-frame">
            <ImageSlot
              src="/images/hero.webp"
              alt="Calm, sunlit treatment room at Derma Care Clinic Akola"
              placeholderLabel="Derma Care Aesthetic Suite"
              variant="arch"
              aspectRatio="3/4"
              priority={true}
              zoomOnHover={true}
            />

            {/* Floating Info Card: Today's Clinic Hours */}
            <div className="hero-floating-card">
              <div className="floating-card-icon">
                <Clock size={18} strokeWidth={1.5} />
              </div>
              <div className="floating-card-body">
                <span className="floating-label">Consultation Status</span>
                <span className="floating-value">
                  {todayInfo.day}: {todayInfo.hours}
                </span>
                <span className="floating-status">
                  {todayInfo.isOpen ? '● Consultation in session' : '○ Closed on Sundays'}
                </span>
              </div>
            </div>

            {/* Floating Doctor Badge */}
            <div className="hero-floating-doctor-tag">
              <span className="float-doc-title">Dr. Shruti Kale (Dabholkar)</span>
              <span className="float-doc-sub">Consultant Dermatologist</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
