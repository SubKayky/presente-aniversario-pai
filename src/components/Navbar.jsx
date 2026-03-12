import { useState } from 'react';
import { Menu, Music, Pause, Play, X } from 'lucide-react';

function Navbar({ fatherName, navigation, musicControl }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const musicLabel = musicControl.isPlaying ? 'Pausar trilha' : 'Reproduzir trilha';

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#inicio" className="brand" onClick={handleLinkClick}>
          <span className="brand-badge">Homenagem</span>
          <strong>{fatherName}</strong>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a key={item.target} href={`#${item.target}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          {musicControl.enabled && (
            <button
              type="button"
              className="music-button"
              onClick={musicControl.onToggle}
              disabled={!musicControl.ready}
              title={musicControl.helperText}
              aria-label={musicLabel}
            >
              <Music size={16} />
              {musicControl.isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
          )}

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((current) => !current)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <nav aria-label="Navegação mobile">
            {navigation.map((item) => (
              <a key={item.target} href={`#${item.target}`} onClick={handleLinkClick}>
                {item.label}
              </a>
            ))}
          </nav>
          {musicControl.enabled && (
            <button
              type="button"
              className="mobile-music-button"
              onClick={musicControl.onToggle}
              disabled={!musicControl.ready}
            >
              {musicControl.isPlaying ? 'Pausar trilha sonora' : 'Reproduzir trilha sonora'}
            </button>
          )}
        </div>
      )}
    </header>
  );
}

export default Navbar;
