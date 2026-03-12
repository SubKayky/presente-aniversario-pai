import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Award, X } from 'lucide-react';

function SurpriseModal({ isOpen, onClose, surpriseData, onCelebrate }) {
  useEffect(() => {
    if (!isOpen) return undefined;

    onCelebrate();
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose, onCelebrate]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="surprise-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.article
            className="surprise-modal"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="surprise-close" onClick={onClose} aria-label="Fechar">
              <X size={19} />
            </button>

            <span className="section-kicker">{surpriseData.preTitle}</span>
            <div className="certificate">
              <Award size={32} />
              <h2>{surpriseData.certificateTitle}</h2>
              <h3>{surpriseData.certificateSubtitle}</h3>
              <p>{surpriseData.recipientLabel}</p>
              <strong>{surpriseData.recipient || 'Meu Pai'}</strong>
              <p>{surpriseData.reason}</p>
            </div>

            <p className="surprise-message">{surpriseData.finalMessage}</p>
            <p className="surprise-closing">{surpriseData.closing}</p>

            <button type="button" className="primary-button" onClick={onCelebrate}>
              {surpriseData.buttonText}
            </button>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SurpriseModal;
