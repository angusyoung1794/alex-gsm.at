import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft, Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';
import { Button } from '../components/ui/button';
import NavigationButtons from '../components/NavigationButtons';

const Contact = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      label: '+43 681 81411499',
      href: 'tel:+436818141149',
      color: 'pink',
    },
    {
      icon: Mail,
      label: '7css77@gmail.com',
      href: 'mailto:7css77@gmail.com',
      color: 'purple',
    },
    {
      icon: MapPin,
      label: 'Linz / Steyr / Wien / Salzburg',
      href: null,
      color: 'pink',
    },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aleksei-bespechnyi-%E5%8C%85%E5%81%89%E7%BF%94-5a8496217',
      icon: Linkedin,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/sss1de?igsh=d3Byb2U2MWhzNWJmb',
      icon: Instagram,
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
            <Mail className="w-8 h-8 text-pink-400" />
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              {t('contactTitle')}
            </h1>
          </div>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
        </div>

        {/* Intro */}
        <div className="text-center mb-12 space-y-4">
          <p className="text-2xl text-white font-semibold">
            {t('contactIntro')}
          </p>
          <p className="text-lg text-pink-400">
            {t('contactInternship')}
          </p>
          <p className="text-gray-400">
            {t('contactFlexible')}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="space-y-4 mb-12">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            const content = (
              <div
                className={`bg-slate-900/50 backdrop-blur-md border border-${item.color}-500/20 rounded-2xl p-6 hover:border-${item.color}-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-${item.color}-500/10 transform hover:-translate-y-1 group`}
                style={{
                  animation: 'slideInRight 0.6s ease-out forwards',
                  animationDelay: `${index * 100}ms`,
                  opacity: 0,
                }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${item.color}-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 text-${item.color}-400`} />
                  </div>
                  <span className="text-xl text-white font-medium">
                    {item.label}
                  </span>
                </div>
              </div>
            );

            return item.href ? (
              <a key={index} href={item.href} className="block">
                {content}
              </a>
            ) : (
              <div key={index}>{content}</div>
            );
          })}
        </div>

        {/* Social Links */}
        <div className="bg-slate-900/50 backdrop-blur-md border border-pink-500/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            {t('language') === 'de' ? 'Folgen Sie mir' : 'Follow me'}
          </h3>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-slate-800/50 border border-pink-500/30 rounded-xl px-6 py-3 hover:bg-pink-500/10 hover:border-pink-400 transition-all duration-300 hover:scale-105"
                >
                  <Icon className="w-5 h-5 text-pink-400" />
                  <span className="text-white font-medium">{link.name}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Photo */}
        <div className="mt-12">
          <div className="bg-slate-900/50 backdrop-blur-md border border-pink-500/20 rounded-2xl overflow-hidden hover:border-pink-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10 max-w-2xl mx-auto">
            <img 
              src="/sagsmulti1.jpg" 
              alt="SAG'S MULTI! Award" 
              className="w-full h-auto object-cover"
            />
            <div className="p-6 text-center">
              <p className="text-white font-semibold text-xl mb-2">
                {t('language') === 'de' ? 'Österreichischer Rhetorik-Meister 2020/21' : 'Austrian Public Speaking Champion 2020/21'}
              </p>
              <p className="text-gray-400">SAG'S MULTI!</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            onClick={() => {
              const subject = t('language') === 'de' ? 'Angebot machen' : 'Do an offer';
              window.location.href = `mailto:7css77@gmail.com?subject=${encodeURIComponent(subject)}`;
            }}
            size="lg"
            className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105 border-0"
          >
            <Mail className="w-6 h-6 mr-3" />
            {t('makeOffer')}
          </Button>
        </div>
      </div>

      {/* Background decoration */}
      <div className="fixed top-1/4 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Navigation Buttons */}
      <NavigationButtons />

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
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

export default Contact;