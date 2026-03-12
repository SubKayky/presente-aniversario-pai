import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

function Hero({ heroData, fatherName, onStart }) {
  return (
    <section id="inicio" className="hero-section section-spacing">
      <div className="container hero-content">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Sparkles size={16} />
          Presente digital de aniversário
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {heroData.title}
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {heroData.subtitle}
        </motion.p>

        <motion.p
          className="hero-name"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Para: <span>{fatherName}</span>
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <button type="button" className="primary-button" onClick={onStart}>
            {heroData.ctaText}
          </button>
          <p>{heroData.supportText}</p>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
