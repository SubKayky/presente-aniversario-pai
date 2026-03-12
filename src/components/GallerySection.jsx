import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const transitionStyles = [
  {
    key: 'cinema',
    initial: { opacity: 0, y: 16, scale: 1.01 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -12, scale: 0.995 },
  },
  {
    key: 'orbit',
    initial: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
      rotate: direction > 0 ? 3 : -3,
      scale: 0.99,
    }),
    animate: { opacity: 1, x: 0, rotate: 0, scale: 1 },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -100 : 100,
      rotate: direction > 0 ? -3 : 3,
      scale: 0.995,
    }),
  },
  {
    key: 'flash',
    initial: { opacity: 0, scale: 1.02 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.985 },
  },
  {
    key: 'tilt',
    initial: (direction) => ({
      opacity: 0,
      scale: 0.99,
      y: 20,
      rotate: direction > 0 ? 2.5 : -2.5,
    }),
    animate: { opacity: 1, scale: 1, y: 0, rotate: 0 },
    exit: (direction) => ({
      opacity: 0,
      scale: 0.99,
      y: -18,
      rotate: direction > 0 ? -2.5 : 2.5,
    }),
  },
  {
    key: 'prism',
    initial: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 110 : -110,
      skewX: direction > 0 ? 8 : -8,
      scale: 0.97,
    }),
    animate: { opacity: 1, x: 0, skewX: 0, scale: 1 },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -110 : 110,
      skewX: direction > 0 ? -8 : 8,
      scale: 0.97,
    }),
  },
];

function GallerySection({ galleryData }) {
  const photos = galleryData.photos ?? [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const autoTimerRef = useRef(null);

  const totalPhotos = photos.length;
  const safeCurrentIndex = Math.min(currentIndex, Math.max(0, totalPhotos - 1));
  const currentPhoto = photos[safeCurrentIndex];

  useEffect(() => {
    if (totalPhotos <= 1) return undefined;

    const delay = Math.max(galleryData.autoPlayDelayMs ?? 5200, 1800);
    if (autoTimerRef.current) {
      window.clearTimeout(autoTimerRef.current);
      autoTimerRef.current = null;
    }

    autoTimerRef.current = window.setTimeout(() => {
      setDirection(1);
      setCurrentIndex((previous) => (previous + 1) % totalPhotos);
    }, delay);

    return () => {
      if (autoTimerRef.current) {
        window.clearTimeout(autoTimerRef.current);
        autoTimerRef.current = null;
      }
    };
  }, [galleryData.autoPlayDelayMs, totalPhotos, safeCurrentIndex]);

  const currentAnimation = useMemo(
    () => transitionStyles[safeCurrentIndex % transitionStyles.length],
    [safeCurrentIndex],
  );

  const goToNext = () => {
    if (totalPhotos < 2) return;
    if (autoTimerRef.current) {
      window.clearTimeout(autoTimerRef.current);
      autoTimerRef.current = null;
    }
    setDirection(1);
    setCurrentIndex((previous) => (previous + 1) % totalPhotos);
  };

  const goToPrevious = () => {
    if (totalPhotos < 2) return;
    if (autoTimerRef.current) {
      window.clearTimeout(autoTimerRef.current);
      autoTimerRef.current = null;
    }
    setDirection(-1);
    setCurrentIndex((previous) => (previous - 1 + totalPhotos) % totalPhotos);
  };

  const jumpTo = (targetIndex) => {
    if (targetIndex === safeCurrentIndex) return;
    if (autoTimerRef.current) {
      window.clearTimeout(autoTimerRef.current);
      autoTimerRef.current = null;
    }
    setDirection(targetIndex > safeCurrentIndex ? 1 : -1);
    setCurrentIndex(targetIndex);
  };

  return (
    <section id="galeria" className="section-spacing">
      <div className="container">
        <header className="section-header">
          <span className="section-kicker">Fotos</span>
          <h2>{galleryData.title}</h2>
        </header>

        <div className="gallery-showcase">
          <div className="gallery-stage" aria-live="polite">
            {currentPhoto && (
              <AnimatePresence mode="sync" custom={direction}>
                <motion.div
                  key={`${currentPhoto.src}-${safeCurrentIndex}`}
                  className="gallery-slide"
                  custom={direction}
                  initial={currentAnimation.initial}
                  animate={currentAnimation.animate}
                  exit={currentAnimation.exit}
                  transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img
                    src={currentPhoto.src}
                    alt=""
                    aria-hidden="true"
                    className="gallery-bg-image"
                    loading="eager"
                    style={{ objectPosition: currentPhoto.focus ?? '50% 50%' }}
                  />
                  <img
                    src={currentPhoto.src}
                    alt={currentPhoto.alt}
                    className="gallery-main-image"
                    loading="eager"
                    style={{ objectPosition: currentPhoto.focus ?? '50% 50%' }}
                  />
                </motion.div>
              </AnimatePresence>
            )}

            {totalPhotos > 1 && (
              <>
                <button
                  type="button"
                  className="gallery-nav gallery-nav-prev"
                  onClick={goToPrevious}
                  aria-label="Foto anterior"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  className="gallery-nav gallery-nav-next"
                  onClick={goToNext}
                  aria-label="Próxima foto"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>

          {totalPhotos > 1 && (
            <div className="gallery-footer">
              <div className="gallery-dots" role="tablist" aria-label="Selecionar foto da galeria">
                {photos.map((photo, index) => (
                  <button
                    key={`${photo.src}-${index}`}
                    type="button"
                    className={`gallery-dot ${index === safeCurrentIndex ? 'active' : ''}`}
                    onClick={() => jumpTo(index)}
                    aria-label={`Ir para foto ${index + 1}`}
                    aria-selected={index === safeCurrentIndex}
                    role="tab"
                  />
                ))}
              </div>
              <span className="gallery-counter">
                {safeCurrentIndex + 1} / {totalPhotos}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
