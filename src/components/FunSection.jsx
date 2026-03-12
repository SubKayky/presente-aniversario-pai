import { motion } from 'framer-motion';
import { Coffee, Sparkles } from 'lucide-react';

function FunSection({ funData }) {
  return (
    <section id="toques" className="section-spacing">
      <div className="container">
        <header className="section-header">
          <span className="section-kicker">Toques humanos</span>
          <h2>{funData.title}</h2>
          <p>{funData.subtitle}</p>
        </header>

        <div className="fun-grid">
          {funData.items.map((item, index) => (
            <motion.article
              key={item.title}
              className="fun-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              {index % 2 === 0 ? <Sparkles size={18} /> : <Coffee size={18} />}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FunSection;
