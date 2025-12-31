import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Download, Globe } from 'lucide-react';
import { Button } from './ui/button';
import MobileNavigation from './MobileNavigation';

const Layout = ({ children }) => {
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-pink-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-end">
            {/* Right Side */}
            <div className="flex items-center space-x-4">
              {/* Language Toggle */}
              <Button
                onClick={toggleLanguage}
                variant="outline"
                size="sm"
                className="border-pink-500/30 bg-slate-900/50 text-pink-400 hover:bg-pink-500/10 hover:text-pink-300 hover:border-pink-400 transition-all duration-300"
              >
                <Globe className="w-4 h-4 mr-2" />
                {language === 'de' ? 'EN' : 'DE'}
              </Button>

              {/* CV Download */}
              <a
                href="ALEKSEI_BESPECHNYI.pdf"
                download="ALEKSEI_BESPECHNYI.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white border-0 transition-all duration-300 shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40"
                >
                  <Download className="w-4 h-4 mr-2" />
                  {t('downloadCV')}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-0 md:pb-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-pink-500/20 py-8 mt-20 mb-16 md:mb-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              {t('footerRights')}
            </div>
            <div className="flex items-center space-x-6">
              <a 
                href="https://www.linkedin.com/in/aleksei-bespechnyi-%E5%8C%85%E5%81%89%E7%BF%94-5a8496217" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a 
                href="https://www.instagram.com/sss1de?igsh=d3Byb2U2MWhzNWJmb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Navigation */}
      <MobileNavigation />
    </div>
  );
};

export default Layout;