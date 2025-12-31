import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import NavigationButtons from '../components/NavigationButtons';

const About = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Button
          onClick={() => navigate('/')}
          variant="outline"
          className="mb-8 border-pink-500/30 bg-slate-900/50 text-pink-400 hover:bg-pink-500/10 hover:text-pink-300 hover:border-pink-400 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t('language') === 'de' ? 'Zurück' : 'Back'}
        </Button>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-3 mb-4">
            <Sparkles className="w-8 h-8 text-pink-400" />
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              {t('aboutTitle')}
            </h1>
            <Sparkles className="w-8 h-8 text-purple-400" />
          </div>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div 
            className="bg-slate-900/50 backdrop-blur-md border border-pink-500/20 rounded-2xl p-8 hover:border-pink-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-pink-500/10 transform hover:-translate-y-1"
            style={{ animationDelay: '100ms' }}
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              {t('aboutText1')}
            </p>
          </div>

          <div 
            className="bg-slate-900/50 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 transform hover:-translate-y-1"
            style={{ animationDelay: '200ms' }}
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              {t('aboutText2')}
            </p>
          </div>

          <div 
            className="bg-slate-900/50 backdrop-blur-md border border-pink-500/20 rounded-2xl p-8 hover:border-pink-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-pink-500/10 transform hover:-translate-y-1"
            style={{ animationDelay: '300ms' }}
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              {t('aboutText3')}
            </p>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            {t('language') === 'de' ? 'Galerie' : 'Gallery'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900/50 backdrop-blur-md border border-pink-500/20 rounded-2xl overflow-hidden hover:border-pink-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10">
              <img 
                src="/sagsmulti3.jpg" 
                alt="SAG'S MULTI!" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <p className="text-white font-semibold">SAG'S MULTI! 2020/21</p>
                <p className="text-gray-400 text-sm">{t('language') === 'de' ? 'Österreichischer Rhetorik-Meister' : 'Austrian Public Speaking Champion'}</p>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-md border border-pink-500/20 rounded-2xl overflow-hidden hover:border-pink-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10">
              <img 
                src="/orf_sagsmulti.jpg" 
                alt="ORF Interview" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <p className="text-white font-semibold">ORF Interview</p>
                <p className="text-gray-400 text-sm">{t('language') === 'de' ? 'Medienauftritt' : 'Media Appearance'}</p>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-md border border-pink-500/20 rounded-2xl overflow-hidden hover:border-pink-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10">
              <img 
                src="/tv_show.jpg" 
                alt="TV Show" 
                className="w-full h-64 object-cover"
                style={{ objectPosition: 'center 30%' }}
              />
              <div className="p-4">
                <p className="text-white font-semibold">TV Show</p>
                <p className="text-gray-400 text-sm">{t('language') === 'de' ? 'Fernsehauftritt' : 'Television Appearance'}</p>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-md border border-pink-500/20 rounded-2xl overflow-hidden hover:border-pink-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10">
              <img 
                src="/sagsmulti2.jpg" 
                alt="Independent Living" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <p className="text-white font-semibold">{t('language') === 'de' ? 'Selbstständig seit 14' : 'Independent Since 14'}</p>
                <p className="text-gray-400 text-sm">{t('language') === 'de' ? 'Leben und Studieren in Österreich' : 'Living and Studying in Austria'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Quote */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-md border border-pink-500/30 rounded-2xl px-8 py-6">
            <p className="text-2xl font-light text-pink-400 italic">
              "{t('language') === 'de' ? 'Unabhängig, belastbar, interkulturell' : 'Independent, resilient, intercultural'}"
            </p>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="fixed top-20 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Navigation Buttons */}
      <NavigationButtons />
    </div>
  );
};

export default About;