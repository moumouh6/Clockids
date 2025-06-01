import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { isRTL } from '../i18n';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const rtl = isRTL();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary-500">
              Clockids<span className="text-accent-500">Palace</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="nav-link">
              {t('home')}
            </Link>
            <Link to="/activities" className="nav-link">
              {t('activities')}
            </Link>
            <Link to="/spa-pool" className="nav-link">
              {t('spa_pool')}
            </Link>
            <Link to="/delivery" className="nav-link">
              {t('delivery')}
            </Link>
            <Link to="/school-trips" className="nav-link">
              {t('school_trips')}
            </Link>
            <Link to="/customer-area" className="nav-link">
              {t('customer_area')}
            </Link>
            <Link to="/ramadan" className="nav-link">
              {t('ramadan')}
            </Link>
            <Link to="/contact" className="nav-link">
              {t('contact')}
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Link to="/book" className="btn btn-primary">
              {t('book')}
            </Link>
          </div>

          <div className="flex md:hidden items-center space-x-4">
            <LanguageSwitcher />
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen bg-white' : 'max-h-0'}`}>
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="nav-link py-2">
              {t('home')}
            </Link>
            <Link to="/activities" className="nav-link py-2">
              {t('activities')}
            </Link>
            <Link to="/spa-pool" className="nav-link py-2">
              {t('spa_pool')}
            </Link>
            <Link to="/delivery" className="nav-link py-2">
              {t('delivery')}
            </Link>
            <Link to="/school-trips" className="nav-link py-2">
              {t('school_trips')}
            </Link>
            <Link to="/customer-area" className="nav-link py-2">
              {t('customer_area')}
            </Link>
            <Link to="/ramadan" className="nav-link py-2">
              {t('ramadan')}
            </Link>
            <Link to="/contact" className="nav-link py-2">
              {t('contact')}
            </Link>
            <Link to="/book" className="btn btn-primary text-center">
              {t('book')}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;