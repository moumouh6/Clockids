import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { isRTL } from '../i18n';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const rtl = isRTL();

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-hero-pattern bg-cover bg-center"
        style={{ filter: 'brightness(0.7)' }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-xl ${rtl ? 'ml-auto' : 'mr-auto'}`}>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-float">
            {t('hero_title')}
          </h1>
          <p className="text-white text-xl md:text-2xl mb-8 opacity-90">
            {t('hero_subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/activities" className="btn btn-primary">
              {t('hero_cta')}
            </Link>
            <Link to="/book" className="btn btn-accent">
              {t('hero_cta_secondary')}
            </Link>
          </div>
        </div>
      </div>
      
      {/* Animated Wave at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg 
          className="relative block w-full h-[70px]" 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;