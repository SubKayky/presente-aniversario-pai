import { motion } from 'framer-motion';
import { CalendarDays } from 'lucide-react';

function TimelineSection({ timelineData }) {
  return (
    <section id="memorias" className="section-spacing">
      <div className="container">
        <header className="section-header">
          <span className="section-kicker">Memórias</span>
          <h2>{timelineData.title}</h2>
          <p>{timelineData.subtitle}</p>
        </header>

        <div className="timeline">
          {timelineData.items.map((item, index) => (
            <motion.article
              key={`${item.title}-${item.year}`}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <div className="timeline-dot" aria-hidden="true" />
              <div className="timeline-content">
                <span className="timeline-year">
                  <CalendarDays size={14} />
                  {item.year}
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TimelineSection;
