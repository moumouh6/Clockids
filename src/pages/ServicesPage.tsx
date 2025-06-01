import React from 'react';
import { useTranslation } from 'react-i18next';
import { Coffee, UtensilsCrossed, Languages, BookOpen, Heart } from 'lucide-react';
import { services } from '../data/services';

const iconComponents = {
  Coffee,
  UtensilsCrossed,
  Languages,
  BookOpen,
  Heart
};

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="section-title">{t('services_title')}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('services_subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => {
            const IconComponent = iconComponents[service.icon as keyof typeof iconComponents];
            const isEven = index % 2 === 0;
            
            return (
              <div key={service.id} className="flex flex-col md:flex-row gap-6 items-center">
                <div className={`md:w-1/2 order-1 ${isEven ? '' : 'md:order-2'}`}>
                  <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <img 
                      src={service.image} 
                      alt={t(service.translateKey)} 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
                <div className={`md:w-1/2 order-2 ${isEven ? '' : 'md:order-1'}`}>
                  <h2 className="text-2xl font-bold mb-4 flex items-center text-primary-600">
                    {IconComponent && <IconComponent className="mr-2" size={24} />}
                    {t(service.translateKey)}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {t(service.descriptionKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;