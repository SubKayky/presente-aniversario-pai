import { motion } from 'framer-motion';
import {
  Brain,
  Compass,
  Hammer,
  HeartHandshake,
  Laugh,
  ShieldCheck,
} from 'lucide-react';

const iconMap = {
  ShieldCheck,
  HeartHandshake,
  Brain,
  Laugh,
  Hammer,
  Compass,
};

function QualitiesSection({ qualitiesData }) {
  return (
    <section id="qualidades" className="section-spacing">
      <div className="container">
        <header className="section-header">
          <span className="section-kicker">Admiração</span>
          <h2>{qualitiesData.title}</h2>
          <p>{qualitiesData.subtitle}</p>
        </header>

        <div className="qualities-grid">
          {qualitiesData.items.map((item, index) => {
            const Icon = iconMap[item.icon] ?? ShieldCheck;

            return (
              <motion.article
                key={item.title}
                className="quality-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <div className="icon-badge">
                  <Icon size={22} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default QualitiesSection;
