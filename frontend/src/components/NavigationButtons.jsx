import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Home, User, GraduationCap, Briefcase, Award, Mail, TrendingUp } from 'lucide-react';

const NavigationButtons = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', icon: Home, delay: 0 },
    { path: '/about', label: t('navAbout'), icon: User, delay: 100 },
    { path: '/education', label: t('navEducation'), icon: GraduationCap, delay: 200 },
    { path: '/experience', label: t('navExperience'), icon: Briefcase, delay: 300 },
    { path: '/skills', label: t('navSkills'), icon: Award, delay: 400 },
    { path: '/trends', label: t('navTrends'), icon: TrendingUp, delay: 500 },
    { path: '/contact', label: t('navContact'), icon: Mail, delay: 600 },
  ];

  return (
    <div className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 flex-col space-y-4">
      {navItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`group relative bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-md border border-pink-500/30 rounded-l-2xl px-6 py-4 transition-all duration-500 hover:border-pink-400 hover:shadow-xl hover:shadow-pink-500/20 ${
              isVisible 
                ? 'translate-x-[calc(100%-3.5rem)] opacity-100' 
                : 'translate-x-[200px] opacity-0'
            } hover:translate-x-0`}
            style={{ 
              transitionDelay: isVisible ? `${item.delay}ms` : '0ms',
            }}
          >
            <div className="flex items-center space-x-3">
              <Icon className="w-5 h-5 text-pink-400 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-white font-medium whitespace-nowrap">
                {item.label}
              </span>
            </div>
            
            <div className="absolute inset-0 rounded-l-2xl bg-gradient-to-r from-pink-500/0 to-purple-500/0 group-hover:from-pink-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
          </button>
        );
      })}
    </div>
  );
};

export default NavigationButtons;
