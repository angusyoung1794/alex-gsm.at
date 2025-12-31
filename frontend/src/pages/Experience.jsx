import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft, Briefcase, Building, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import NavigationButtons from '../components/NavigationButtons';

const Experience = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const experiences = [
    {
      title: t('exp1Title'),
      company: t('exp1Company'),
      description: t('exp1Desc'),
      date: '',
      icon: Briefcase,
    },
    {
      title: t('exp2Title'),
      company: t('exp2Company'),
      description: t('exp2Desc'),
      date: t('exp2Date'),
      icon: Building,
    },
    {
      title: t('exp3Title'),
      company: t('exp3Company'),
      description: t('exp3Desc'),
      date: t('exp3Date'),
      location: t('exp3Location'),
      icon: Briefcase,
    },
    {
      title: t('exp4Title'),
      company: t('exp4Company'),
      description: t('exp4Desc'),
      date: '',
      icon: Award,
    },
    {
      title: t('exp5Title'),
      company: t('exp5Company'),
      description: '',
      date: t('exp5Date'),
      icon: Award,
    },
    {
      title: t('exp6Title'),
      company: '',
      description: t('exp6Desc'),
      date: '',
      icon: Award,
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-5xl">
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
            <Briefcase className="w-8 h-8 text-pink-400" />
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              {t('experienceTitle')}
            </h1>
          </div>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
        </div>

        {/* Experience Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur-md border border-pink-500/20 rounded-2xl p-6 hover:border-pink-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-pink-500/10 transform hover:-translate-y-2 group"
                style={{
                  animation: 'fadeInUp 0.6s ease-out forwards',
                  animationDelay: `${index * 100}ms`,
                  opacity: 0,
                }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-pink-400" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {exp.title}
                </h3>
                
                {exp.company && (
                  <p className="text-pink-400 font-medium mb-2">
                    {exp.company}
                  </p>
                )}
                
                {exp.location && (
                  <p className="text-gray-400 text-sm mb-2">
                    {exp.location}
                  </p>
                )}
                
                {exp.date && (
                  <p className="text-gray-500 text-sm mb-3">
                    {exp.date}
                  </p>
                )}
                
                {exp.description && (
                  <p className="text-gray-400 leading-relaxed">
                    {exp.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Photo Gallery */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            {t('language') === 'de' ? 'Projektgalerie' : 'Project Gallery'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 backdrop-blur-md border border-pink-500/20 rounded-2xl overflow-hidden hover:border-pink-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10">
              <img 
                src="/nxrt.jpg" 
                alt="NXRT GmbH" 
                className="w-full h-48 object-cover"
                style={{ objectPosition: 'center 35%' }}
              />
              <div className="p-4">
                <p className="text-white font-semibold">NXRT GmbH</p>
                <p className="text-gray-400 text-sm">{t('language') === 'de' ? 'XR-Technologien & Nachhaltigkeit' : 'XR Technologies & Sustainability'}</p>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-md border border-pink-500/20 rounded-2xl overflow-hidden hover:border-pink-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10">
              <img 
                src="/moonshot.jpg" 
                alt="Moonshot Bootcamp" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-white font-semibold">Moonshot Bootcamp</p>
                <p className="text-gray-400 text-sm">{t('language') === 'de' ? 'SDGs & Exponential Tech' : 'SDGs & Exponential Tech'}</p>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-md border border-pink-500/20 rounded-2xl overflow-hidden hover:border-pink-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10">
              <img 
                src="/sap.jpg" 
                alt="SAP Certificate" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-white font-semibold">SAP</p>
                <p className="text-gray-400 text-sm">MM, FI, SD</p>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-md border border-pink-500/20 rounded-2xl overflow-hidden hover:border-pink-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10">
              <img 
                src="/urkunde.jpg" 
                alt="Certificate" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-white font-semibold">{t('language') === 'de' ? 'Urkunde' : 'Certificate'}</p>
                <p className="text-gray-400 text-sm">{t('language') === 'de' ? 'Auszeichnung' : 'Award'}</p>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-md border border-pink-500/20 rounded-2xl overflow-hidden hover:border-pink-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10">
              <img 
                src="/abschlusszertifikat.jpg" 
                alt="Graduation Certificate" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-white font-semibold">{t('language') === 'de' ? 'Abschlusszertifikat' : 'Graduation Certificate'}</p>
                <p className="text-gray-400 text-sm">HAK Oberwart</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="fixed top-1/3 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/3 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Navigation Buttons */}
      <NavigationButtons />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Experience;
