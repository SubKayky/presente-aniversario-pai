import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function CounterCard({ item, index }) {
  const cardRef = useRef(null);
  const inView = useInView(cardRef, { once: true, amount: 0.4 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;

    let animationFrame;
    const duration = 1800;
    const start = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.floor(item.value * eased));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [inView, item.value]);

  return (
    <motion.article
      ref={cardRef}
      className="counter-card"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
    >
      <h3>
        {value.toLocaleString('pt-BR')}
        {item.suffix}
      </h3>
      <strong>{item.label}</strong>
      <p>{item.description}</p>
    </motion.article>
  );
}

function CounterSection({ counterData }) {
  return (
    <section id="simbolico" className="section-spacing">
      <div className="container">
        <header className="section-header">
          <span className="section-kicker">Contador simbólico</span>
          <h2>{counterData.title}</h2>
          <p>{counterData.subtitle}</p>
        </header>

        <div className="counter-grid">
          {counterData.items.map((item, index) => (
            <CounterCard key={item.label} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CounterSection;
