import React, { useRef } from 'react';
import { siteContent } from '../siteContent';
import { Star, ExternalLink, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import './Reviews.css';

export default function Reviews() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 360;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="reviews-section section-padding" id="reviews">
      <div className="container">
        
        {/* Real Proof Banner */}
        <div className="reviews-hero-card hairline-card reveal-item">
          <div className="reviews-summary-left">
            <span className="eyebrow">Patient Experience</span>
            <div className="stars-stat-row">
              <span className="huge-rating">{siteContent.proof.rating}</span>
              <div className="stars-column">
                <div className="stars-flex" aria-label="5 stars rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="var(--color-accent)" stroke="var(--color-accent)" />
                  ))}
                </div>
                <span className="reviews-count-text">
                  Based on <strong>{siteContent.proof.reviewCount} verified Google reviews</strong>
                </span>
              </div>
            </div>
            <p className="reviews-note">
              A reflection of unhurried consultations, compassionate communication, and clean clinical protocols in Akola.
            </p>
          </div>

          <div className="reviews-summary-right">
            <a 
              href={siteContent.location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-google-reviews"
            >
              <span>Read on Google Maps</span>
              <ExternalLink size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Carousel Controls Header */}
        <div className="reviews-carousel-header reveal-item">
          <span className="carousel-sub">Patient Testimonials</span>
          <div className="carousel-nav-arrows">
            <button 
              type="button" 
              className="arrow-nav-btn"
              onClick={() => scroll('left')}
              aria-label="Previous review"
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>
            <button 
              type="button" 
              className="arrow-nav-btn"
              onClick={() => scroll('right')}
              aria-label="Next review"
            >
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Carousel of Review Cards */}
        <div className="reviews-carousel-track reveal-item" ref={carouselRef}>
          {siteContent.testimonials.map((t) => (
            <article key={t.id} className="testimonial-card hairline-card">
              <div className="card-top-row">
                <div className="card-stars">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="var(--color-accent)" stroke="var(--color-accent)" />
                  ))}
                </div>
                <span className="verified-badge">{t.date}</span>
              </div>

              <div className="card-quote-icon">
                <Quote size={22} strokeWidth={1.25} />
              </div>

              <p className="card-text">
                “{t.text}”
              </p>

              <div className="card-author">
                <span className="author-name">{t.name}</span>
                <span className="author-loc">{t.treatment} · {t.locality}</span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
