import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import { activities } from '../data/activities';
import { services } from '../data/services';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Hero />
      
      {/* Activities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('activities_title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('activities_subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.slice(0, 3).map((activity) => (
              <div key={activity.id} className="card group hover:transform hover:scale-105 transition-all duration-300">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={t(activity.translateKey)} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <h3 className="text-white text-xl font-bold p-4">
                      {t(activity.translateKey)}
                    </h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 mb-4">
                    {t(activity.descriptionKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/activities" className="btn btn-primary inline-flex items-center">
              {t('hero_cta')}
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Highlight Section */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('info_special')}
              </h2>
              <p className="text-white/90 text-lg mb-6">
                {t('booking_subtitle')}
              </p>
              <Link to="/book" className="btn btn-accent">
                {t('book')}
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white text-gray-800 rounded-lg p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center justify-center mb-4">
                  <Star className="text-accent-500 mr-2" size={24} fill="currentColor" />
                  <h3 className="text-xl font-bold">Special Promotion</h3>
                  <Star className="text-accent-500 ml-2" size={24} fill="currentColor" />
                </div>
                <p className="text-center text-3xl font-bold mb-4">12 GAMES</p>
                <p className="text-center text-lg mb-2">for only</p>
                <p className="text-center text-4xl font-bold text-primary-500">1000 DA</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Preview */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('services_title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('services_subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => (
              <div key={service.id} className="card group">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={t(service.translateKey)} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <h3 className="text-white text-xl font-bold p-4">
                      {t(service.translateKey)}
                    </h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 mb-4">
                    {t(service.descriptionKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/services" className="btn btn-primary inline-flex items-center">
              {t('services')}
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('info_title')}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <h3 className="text-xl font-bold mb-4 text-primary-500">{t('info_hours')}</h3>
              <p className="mb-2">{t('info_weekdays')}</p>
              <p>{t('info_weekends')}</p>
            </div>
            
            <div className="card p-6 text-center">
              <h3 className="text-xl font-bold mb-4 text-primary-500">{t('info_prices')}</h3>
              <p className="mb-2">{t('info_entry')}</p>
              <p className="font-bold text-secondary-500">{t('info_special')}</p>
            </div>
            
            <div className="card p-6 text-center">
              <h3 className="text-xl font-bold mb-4 text-primary-500">{t('info_address')}</h3>
              <p className="mb-2">{t('info_location')}</p>
              <a 
                href="https://maps.app.goo.gl/oAJBvgYud2aNywVp8" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block mt-2 text-primary-500 hover:underline"
              >
                View on Map
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-secondary-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('booking_title')}</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">{t('booking_subtitle')}</p>
          <Link to="/book" className="btn btn-accent">
            {t('book')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;