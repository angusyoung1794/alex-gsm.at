import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft, GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Button } from '../components/ui/button';
import NavigationButtons from '../components/NavigationButtons';

const Education = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const educationItems = [
    {
      title: t('edu1Title'),
      location: t('edu1Location'),
      date: t('edu1Date'),
      color: 'pink',
    },
    {
      title: t('edu2Title'),
      location: t('edu2Location'),
      date: t('edu2Date'),
      color: 'purple',
    },
    {
      title: t('edu3Title'),
      location: t('edu3Location'),
      date: t('edu3Date'),
      color: 'pink',
    },
  ];

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
            <GraduationCap className="w-8 h-8 text-pink-400" />
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              {t('educationTitle')}
            </h1>
          </div>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative space-y-8">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 via-purple-500 to-pink-500" />

          {educationItems.map((item, index) => (
            <div 
              key={index}
              className="relative pl-20 group"
              style={{
                animation: 'slideIn 0.6s ease-out forwards',
                animationDelay: `${index * 150}ms`,
                opacity: 0,
              }}
            >
              {/* Timeline dot */}
              <div className={`absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-${item.color}-400 to-${item.color}-600 ring-4 ring-slate-900 group-hover:scale-125 transition-transform duration-300`} />

              {/* Content card */}
              <div className={`bg-slate-900/50 backdrop-blur-md border border-${item.color}-500/20 rounded-2xl p-6 hover:border-${item.color}-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-${item.color}-500/10 transform hover:-translate-y-1`}>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                
                <div className="space-y-2">
                  <div className="flex items-center text-gray-400">
                    <MapPin className="w-4 h-4 mr-2 text-pink-400" />
                    <span>{item.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-400">
                    <Calendar className="w-4 h-4 mr-2 text-purple-400" />
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="fixed top-1/4 right-10 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Navigation Buttons */}
      <NavigationButtons />

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Education;