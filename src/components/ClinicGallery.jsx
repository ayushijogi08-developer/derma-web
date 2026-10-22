import React, { useState } from 'react';
import { siteContent } from '../siteContent';
import ImageSlot from './ImageSlot';
import { X, ZoomIn } from 'lucide-react';
import './ClinicGallery.css';

export default function ClinicGallery() {
  const gallery = siteContent.gallery || [];
  const [activeItem, setActiveItem] = useState(null);

  return (
    <section className="clinic-gallery-section section-padding" id="gallery">
      <div className="container">
        
        {/* Section Header */}
        <div className="gallery-header text-center reveal-item">
          <span className="eyebrow">The Space</span>
          <h2 className="section-title">A calm, considered environment.</h2>
          <p className="section-description">
            Private consultation suites, natural light, and medical-grade sterilization standards in the heart of Jatharpeth, Akola.
          </p>
        </div>

        {/* Masonry / Asymmetric Image Grid */}
        <div className="gallery-grid">
          {gallery.map((item, index) => {
            const isTall = index === 0 || index === 3;
            return (
              <div 
                key={item.id} 
                className={`gallery-item reveal-item ${isTall ? 'is-tall' : 'is-standard'}`}
                onClick={() => setActiveItem(item)}
              >
                <div className="gallery-img-container">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="gallery-img"
                    loading="lazy"
                  />
                  <div className="gallery-hover-overlay">
                    <ZoomIn size={22} strokeWidth={1.5} className="gallery-zoom-icon" />
                    <span className="gallery-item-title">{item.title}</span>
                    <span className="gallery-item-caption">{item.caption}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft Lightbox Modal */}
        {activeItem && (
          <div 
            className="gallery-lightbox-overlay"
            onClick={() => setActiveItem(null)}
            role="dialog"
            aria-modal="true"
          >
            <div className="lightbox-modal" onClick={(e) => e.stopPropagation()}>
              <button 
                type="button" 
                className="lightbox-close"
                onClick={() => setActiveItem(null)}
                aria-label="Close image preview"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
              
              <div className="lightbox-img-wrapper">
                <img 
                  src={activeItem.image} 
                  alt={activeItem.title} 
                  className="lightbox-img" 
                />
              </div>

              <div className="lightbox-info">
                <h4 className="lightbox-title">{activeItem.title}</h4>
                <p className="lightbox-desc">{activeItem.caption}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
