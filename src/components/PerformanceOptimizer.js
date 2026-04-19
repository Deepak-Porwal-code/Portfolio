import { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload hero image
      const heroImg = new Image();
      heroImg.src = '/static/media/HeroImage.jpg';
      
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.as = 'font';
      fontLink.type = 'font/woff2';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);
    };

    // Optimize images with intersection observer
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[loading="lazy"]');
      
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src || img.src;
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          });
        }, {
          rootMargin: '50px 0px',
          threshold: 0.01
        });

        images.forEach((img) => imageObserver.observe(img));
      }
    };

    // Remove unused CSS
    const removeUnusedCSS = () => {
      // Remove unused Material-UI styles if not needed
      const unusedStyles = document.querySelectorAll('style[data-emotion]');
      unusedStyles.forEach((style) => {
        if (style.innerHTML.length === 0) {
          style.remove();
        }
      });
    };

    // Optimize animations
    const optimizeAnimations = () => {
      // Reduce motion for users who prefer it
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
      }
    };

    // Run optimizations
    preloadCriticalResources();
    optimizeImages();
    removeUnusedCSS();
    optimizeAnimations();

    // Cleanup function
    return () => {
      // Cleanup observers if needed
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;