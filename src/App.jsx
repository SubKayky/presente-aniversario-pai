import { useCallback, useEffect, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import BackgroundEffects from './components/BackgroundEffects';
import CounterSection from './components/CounterSection';
import FinalSection from './components/FinalSection';
import Footer from './components/Footer';
import FunSection from './components/FunSection';
import GallerySection from './components/GallerySection';
import Hero from './components/Hero';
import LetterSection from './components/LetterSection';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import QualitiesSection from './components/QualitiesSection';
import QuotesSection from './components/QuotesSection';
import SurpriseModal from './components/SurpriseModal';
import TimelineSection from './components/TimelineSection';
import { fatherData } from './data/fatherData';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSurpriseOpen, setIsSurpriseOpen] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [musicReady, setMusicReady] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 2200);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!fatherData.soundtrack.enabled) return undefined;

    // A trilha fica em public/audio/trilha.mp3 e toca somente por clique do usuario.
    const audio = new Audio(fatherData.soundtrack.src);
    audio.loop = true;
    audio.preload = 'none';

    const handleError = () => setMusicReady(false);
    audio.addEventListener('error', handleError);
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.removeEventListener('error', handleError);
    };
  }, []);

  const launchConfetti = useCallback(() => {
    // Duas explosoes laterais para um efeito mais elegante e menos exagerado.
    const colors = ['#d6b36a', '#f7e9c6', '#4d7f9f', '#f3f1ea'];

    confetti({
      particleCount: 90,
      spread: 80,
      startVelocity: 35,
      origin: { x: 0.2, y: 0.8 },
      colors,
      ticks: 200,
    });

    confetti({
      particleCount: 90,
      spread: 90,
      startVelocity: 35,
      origin: { x: 0.8, y: 0.8 },
      colors,
      ticks: 200,
    });
  }, []);

  const toggleMusic = useCallback(async () => {
    if (!audioRef.current || !musicReady) return;

    if (isPlayingMusic) {
      audioRef.current.pause();
      setIsPlayingMusic(false);
      return;
    }

    try {
      await audioRef.current.play();
      setIsPlayingMusic(true);
    } catch (error) {
      setMusicReady(false);
    }
  }, [isPlayingMusic, musicReady]);

  const openSurprise = useCallback(() => setIsSurpriseOpen(true), []);
  const closeSurprise = useCallback(() => setIsSurpriseOpen(false), []);

  const handleStart = useCallback(() => {
    const messageSection = document.getElementById('mensagem');
    messageSection?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="app-shell">
      <BackgroundEffects />

      <LoadingScreen
        isVisible={isLoading}
        title={fatherData.loading.title}
        subtitle={fatherData.loading.subtitle}
      />

      <Navbar
        fatherName={fatherData.fatherName}
        navigation={fatherData.navigation}
        musicControl={{
          enabled: fatherData.soundtrack.enabled,
          ready: musicReady,
          isPlaying: isPlayingMusic,
          label: fatherData.soundtrack.buttonLabel,
          helperText: fatherData.soundtrack.helperText,
          onToggle: toggleMusic,
        }}
      />

      <main className="page-content">
        <Hero
          heroData={fatherData.hero}
          fatherName={fatherData.fatherName}
          onStart={handleStart}
        />
        <LetterSection letterData={fatherData.letter} />
        <QualitiesSection qualitiesData={fatherData.qualities} />
        <TimelineSection timelineData={fatherData.timeline} />
        <GallerySection galleryData={fatherData.gallery} />
        <QuotesSection quotesData={fatherData.quotes} />
        <FunSection funData={fatherData.funMoments} />
        <CounterSection counterData={fatherData.counters} />
        <FinalSection finalData={fatherData.finalSection} onOpenSurprise={openSurprise} />
      </main>

      <Footer footerData={fatherData.footer} fatherName={fatherData.fatherName} />

      <SurpriseModal
        isOpen={isSurpriseOpen}
        onClose={closeSurprise}
        surpriseData={fatherData.surprise}
        onCelebrate={launchConfetti}
      />
    </div>
  );
}

export default App;
