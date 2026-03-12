import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';

function FinalSection({ finalData, onOpenSurprise }) {
  return (
    <section id="final" className="section-spacing">
      <div className="container">
        <motion.article
          className="final-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-kicker">Encerramento</span>
          <h2>{finalData.title}</h2>
          <p>{finalData.message}</p>
          <p className="final-highlight">{finalData.highlight}</p>
          <button type="button" className="primary-button" onClick={onOpenSurprise}>
            <Gift size={17} />
            {finalData.buttonText}
          </button>
        </motion.article>
      </div>
    </section>
  );
}

export default FinalSection;
