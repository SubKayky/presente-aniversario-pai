import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

function QuotesSection({ quotesData }) {
  const sliderRef = useRef(null);

  return (
    <section id="licoes" className="section-spacing">
      <div className="container">
        <header className="section-header">
          <span className="section-kicker">Frases marcantes</span>
          <h2>{quotesData.title}</h2>
          <p>{quotesData.subtitle}</p>
        </header>

        <div className="quotes-slider" ref={sliderRef}>
          {quotesData.items.map((item, index) => (
            <motion.article
              key={item.text}
              className="quote-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
            >
              <Quote size={20} />
              <blockquote>{item.text}</blockquote>
              <p>{item.context}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuotesSection;
