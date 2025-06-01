import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Mail, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">
                Clockids<span className="text-accent-500">Palace</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-4">
              {t('hero_subtitle')}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/ClocKidsPalace/?locale=fr_FR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://www.instagram.com/clockidsspa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://youtube.com/@clockids?si=Ou_CiZ5efjd4ai9d" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="Youtube"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="/activities" className="text-gray-400 hover:text-white transition-colors">
                  {t('activities')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  {t('services')}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">
                  {t('gallery')}
                </Link>
              </li>
              <li>
                <Link to="/prices" className="text-gray-400 hover:text-white transition-colors">
                  {t('prices')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">{t('contact_info')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400">
                  {t('info_location')}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 flex-shrink-0" size={18} />
                <a href="tel:+213555505505" className="text-gray-400 hover:text-white transition-colors">
                  +213 555 505 505
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 flex-shrink-0" size={18} />
                <a href="mailto:Info@clockids.com" className="text-gray-400 hover:text-white transition-colors">
                Info@clockids.com
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">{t('info_hours')}</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                {t('info_weekdays')}
              </li>
              <li className="text-gray-400">
                {t('info_weekends')}
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between">
          <p className="text-gray-500 text-sm mb-2 md:mb-0">
            &copy; {currentYear} Clockids Palace. {t('footer_rights')}
          </p>
          <div className="flex space-x-4">
            <Link to="/privacy" className="text-gray-500 text-sm hover:text-white transition-colors">
              {t('footer_privacy')}
            </Link>
            <Link to="/terms" className="text-gray-500 text-sm hover:text-white transition-colors">
              {t('footer_terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;