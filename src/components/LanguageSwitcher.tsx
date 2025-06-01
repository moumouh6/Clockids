import React from 'react';
import { useTranslation } from 'react-i18next';
import { setLanguageDirection } from '../i18n';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguageDirection(lng);
  };
  
  return (
    <div className="flex items-center">
      <button 
        onClick={() => changeLanguage('en')}
        className={`lang-switcher ${i18n.language === 'en' ? 'lang-active' : ''}`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button 
        onClick={() => changeLanguage('fr')}
        className={`lang-switcher ${i18n.language === 'fr' ? 'lang-active' : ''}`}
        aria-label="Switch to French"
      >
        FR
      </button>
      <button 
        onClick={() => changeLanguage('ar')}
        className={`lang-switcher ${i18n.language === 'ar' ? 'lang-active' : ''}`}
        aria-label="Switch to Arabic"
      >
        AR
      </button>
    </div>
  );
};

export default LanguageSwitcher;