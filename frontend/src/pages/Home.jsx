import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Play } from 'lucide-react';
import { Button } from '../components/ui/button';
import NavigationButtons from '../components/NavigationButtons';
import VideoModal from '../components/VideoModal';

const Home = () => {
  const { language, t } = useLanguage();
  const [fogOpacity, setFogOpacity] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState({ url: '', title: '' });

  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setFogOpacity(0);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleMakeOffer = () => {
    const subject = language === 'de' ? 'Angebot machen' : 'Do an offer';
    window.location.href = `mailto:7css77@gmail.com?subject=${encodeURIComponent(subject)}`;
  };

  const getVideoUrl = (lang) => {
    const videos = {
      de: 'https://youtube.com/shorts/vErWm_IpNcw?si=Qap27sNDinJneJ8E',
      en: 'https://youtube.com/shorts/rTh2-uWRnN4?si=qWIJP94fcsx-qs9a',
      es: 'https://youtube.com/shorts/CumYTZW4-Qg?si=xYaG6I7rRi8RSjHN',
      zh: 'https://youtube.com/shorts/WjtVBHyqSlc?si=qN6LSEtVhqKmnjHd',
    };
    return videos[lang];
  };

  const handleVideoClick = (e, lang, title) => {
    if (!isMobile()) {
      e.preventDefault();
      setCurrentVideo({ url: getVideoUrl(lang), title });
      setModalOpen(true);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black" />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Portrait */}
          <div className="relative mb-12 flex justify-center">
            <div className="relative">
              <img
                src="/main_page.jpg"
                alt="Aleksei Bespechnyi"
                className="w-96 h-96 object-cover rounded-full shadow-2xl shadow-gray-500/20 transition-all duration-1000"
                style={{
                  filter: `blur(${fogOpacity * 8}px)`,
                  opacity: 1 - (fogOpacity * 0.5),
                }}
              />
              <div 
                className="absolute inset-0 rounded-full bg-gradient-to-b from-white/40 via-gray-300/30 to-transparent transition-opacity duration-2000 pointer-events-none"
                style={{ opacity: fogOpacity }}
              />
            </div>
          </div>

          {/* Hero Text */}
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-wider">
              {t('heroTitle')}
            </h1>
            <p className="text-3xl md:text-4xl text-white font-medium">
              {t('heroSubtitle')}
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center mb-8 space-y-2 px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-white">Aleksei Bespechnyi</h2>
            <p className="text-base md:text-lg text-gray-300 font-medium">
              {language === 'de' 
                ? 'Bachelor Global Sales & Marketing Student (3. Jahr, FH Steyr)' 
                : 'Bachelor Global Sales & Marketing Student (3rd year, FH Steyr)'}
            </p>
            <p className="text-sm md:text-base text-gray-400 italic max-w-2xl mx-auto px-4">
              {language === 'de'
                ? '„Ich suche mein Pflichtpraktikum ab Februar 2026 – idealerweise im internationalen Vertrieb, Key Account Management oder Digital Marketing."'
                : '"Looking for my mandatory internship from february 2026 – ideally in international sales, key account management or digital marketing."'}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4 text-gray-300 pt-2 space-y-1 md:space-y-0 text-sm md:text-base">
              <span>+43 681 81411499</span>
              <span className="hidden md:inline text-gray-500">•</span>
              <span>7css77@gmail.com</span>
              <span className="hidden md:inline text-gray-500">•</span>
              <span>Linz/Steyr/Wien/Salzburg</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mb-12">
            <Button
              onClick={handleMakeOffer}
              size="lg"
              className="bg-white hover:bg-gray-100 text-black px-12 py-6 text-xl font-bold rounded-full shadow-2xl shadow-white/20 hover:shadow-white/40 transition-all duration-300 hover:scale-105 border-0"
            >
              <Mail className="w-6 h-6 mr-3" />
              {t('makeOffer')}
            </Button>
          </div>

          {/* Promo Section */}
          <div className="bg-slate-900/50 backdrop-blur-md border border-gray-700 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="text-center space-y-6">
              <h3 className="text-2xl text-white font-bold mb-4">
                {language === 'de' ? 'Video-Angebote' : 'Video Offers'}
              </h3>
              
              {/* Deutsch Video */}
              <div className="bg-slate-800/50 border border-gray-700 rounded-xl p-4 mb-4 hover:border-gray-500 transition-all duration-300">
                <p className="text-sm md:text-base text-gray-300 mb-3">
                  {t('promoTextDeutsch')}
                </p>
                <a
                  href={getVideoUrl('de')}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleVideoClick(e, 'de', 'Deutsch')}
                  className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-black border-0 transition-all duration-300 shadow-lg px-4 py-2 rounded-md text-sm font-medium"
                  style={{ touchAction: 'manipulation' }}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Deutsch
                </a>
              </div>

              {/* English Video */}
              <div className="bg-slate-800/50 border border-gray-700 rounded-xl p-4 mb-4 hover:border-gray-500 transition-all duration-300">
                <p className="text-sm md:text-base text-gray-300 mb-3">
                  {t('promoTextEnglish')}
                </p>
                <a
                  href={getVideoUrl('en')}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleVideoClick(e, 'en', 'English')}
                  className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-black border-0 transition-all duration-300 shadow-lg px-4 py-2 rounded-md text-sm font-medium"
                  style={{ touchAction: 'manipulation' }}
                >
                  <Play className="w-4 h-4 mr-2" />
                  English
                </a>
              </div>

              {/* Español Video */}
              <div className="bg-slate-800/50 border border-gray-700 rounded-xl p-4 mb-4 hover:border-gray-500 transition-all duration-300">
                <p className="text-sm md:text-base text-gray-300 mb-3">
                  {t('promoTextEspanol')}
                </p>
                <a
                  href={getVideoUrl('es')}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleVideoClick(e, 'es', 'Español')}
                  className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-black border-0 transition-all duration-300 shadow-lg px-4 py-2 rounded-md text-sm font-medium"
                  style={{ touchAction: 'manipulation' }}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Español
                </a>
              </div>

              {/* Chinese Video */}
              <div className="bg-slate-800/50 border border-gray-700 rounded-xl p-4 hover:border-gray-500 transition-all duration-300">
                <p className="text-sm md:text-base text-gray-300 mb-3">
                  {t('promoTextChinese')}
                </p>
                <a
                  href={getVideoUrl('zh')}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleVideoClick(e, 'zh', '中文')}
                  className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-black border-0 transition-all duration-300 shadow-lg px-4 py-2 rounded-md text-sm font-medium"
                  style={{ touchAction: 'manipulation' }}
                >
                  <Play className="w-4 h-4 mr-2" />
                  中文
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NavigationButtons />

      <VideoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        videoUrl={currentVideo.url}
        title={currentVideo.title}
      />
    </div>
  );
};

export default Home;
