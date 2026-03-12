import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

function LetterSection({ letterData }) {
  return (
    <section id="mensagem" className="section-spacing">
      <div className="container">
        <motion.article
          className="letter-card"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
        >
          <header className="section-header">
            <span className="section-kicker">Carta principal</span>
            <h2>{letterData.title}</h2>
          </header>

          <Quote className="letter-quote-icon" aria-hidden="true" />

          <div className="letter-content">
            {letterData.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <footer className="letter-signature">{letterData.signature}</footer>
        </motion.article>
      </div>
    </section>
  );
}

export default LetterSection;
