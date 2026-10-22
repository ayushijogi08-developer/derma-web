import React, { useState } from 'react';
import './ImageSlot.css';

/**
 * ImageSlot Component (v2)
 * Supports real image rendering with lazy loading, graceful warm neutral placeholder
 * fallback, hover zoom effects, and customizable border radius (arch, soft, pill).
 */
export default function ImageSlot({
  src,
  alt,
  aspectRatio = '4/5',
  variant = 'soft', // 'soft' | 'arch' | 'landscape' | 'circle' | 'pill'
  placeholderLabel = 'Clinic Photography Slot',
  caption,
  className = '',
  priority = false,
  zoomOnHover = false
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <figure className={`image-slot-wrapper ${variant} ${zoomOnHover ? 'zoom-effect' : ''} ${className}`}>
      <div 
        className="image-slot-container"
        style={{ aspectRatio }}
      >
        {src && !imageError ? (
          <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`image-slot-img ${imageLoaded ? 'loaded' : ''}`}
          />
        ) : (
          <div className="image-slot-placeholder" aria-label={alt || placeholderLabel}>
            <div className="placeholder-pattern" />
            <div className="placeholder-content">
              <span className="placeholder-symbol">✦</span>
              <span className="placeholder-text">{placeholderLabel}</span>
              {alt && <span className="placeholder-subtext">{alt}</span>}
            </div>
          </div>
        )}
      </div>
      {caption && <figcaption className="image-slot-caption">{caption}</figcaption>}
    </figure>
  );
}
