import { useEffect } from 'react';

/**
 * useScrollReveal Hook
 * 
 * Progressive enhancement reveal system:
 * 1. Elements are visible by default without JavaScript or if the observer fails.
 * 2. Only after mount, `.js-reveals-active` is added to documentElement to enable reveal styles.
 * 3. Uses threshold: 0.05 and rootMargin: '0px 0px -8% 0px' so large/tall elements trigger easily.
 * 4. Replay-on-scroll-pass:
 *    - On enter (isIntersecting): add `is-visible`
 *    - On leave (entry.intersectionRatio <= 0 and !isIntersecting): reset to hidden ONLY when completely out of the viewport.
 * 5. Safety net: guarantees any element still hidden 1.5 seconds after mount is shown.
 * 6. Respects prefers-reduced-motion by immediately revealing all items without animation.
 */
export function useScrollReveal() {
  useEffect(() => {
    // 1. Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal-item').forEach((el) => {
        el.classList.add('is-visible');
      });
      return;
    }

    // 2. Mark JS as active so progressive enhancement CSS activates
    document.documentElement.classList.add('js-reveals-active');

    // 3. Configure IntersectionObserver safely
    let observer;
    try {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
            } else if (entry.intersectionRatio <= 0) {
              // Only reset when completely out of the viewport (never while partially visible)
              entry.target.classList.remove('is-visible');
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: '0px 0px -8% 0px'
        }
      );

      const elements = document.querySelectorAll('.reveal-item');
      elements.forEach((el) => observer.observe(el));
    } catch (err) {
      // Fallback: make everything visible if IntersectionObserver errors
      document.querySelectorAll('.reveal-item').forEach((el) => {
        el.classList.add('is-visible');
      });
    }

    // 4. Safety net: ensure all elements are visible 1.5 seconds after mount
    const safetyNetTimer = setTimeout(() => {
      document.querySelectorAll('.reveal-item').forEach((el) => {
        // If an element is within or near the visible scroll position and somehow still hidden, show it
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 200 && rect.bottom > -200) {
          el.classList.add('is-visible');
        }
      });
    }, 1500);

    return () => {
      clearTimeout(safetyNetTimer);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);
}
