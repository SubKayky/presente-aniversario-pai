import { useMemo } from 'react';

function BackgroundEffects() {
  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, index) => ({
        id: index,
        x: (index * 37) % 100,
        y: (index * 53) % 100,
        size: 2 + (index % 4),
        duration: 10 + (index % 6) * 2,
        delay: (index % 7) * 0.7,
      })),
    [],
  );

  return (
    <div className="background-effects" aria-hidden="true">
      <div className="background-glow background-glow-top" />
      <div className="background-glow background-glow-bottom" />
      <div className="background-particles">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="particle-dot"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default BackgroundEffects;
