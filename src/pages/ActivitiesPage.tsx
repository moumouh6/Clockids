import React from 'react';
import { useTranslation } from 'react-i18next';
import { Gamepad2, Car, Waves, Flower, Flame, Droplets } from 'lucide-react';
import { activities } from '../data/activities';

const ActivitiesPage: React.FC = () => {
  const { t } = useTranslation();

  const getIconComponent = (iconName: string) => {
    const icons = {
      Gamepad2,
      Car,
      Waves,
      Flower,
      Flame,
      Droplets
    };
    return icons[iconName as keyof typeof icons];
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="section-title">{t('activities_title')}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('activities_subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => {
            const IconComponent = getIconComponent(activity.icon);
            return (
              <div key={activity.id} className="card group hover:transform hover:scale-105 transition-all duration-300">
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={t(activity.translateKey)} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <h3 className="text-white text-xl font-bold p-4 flex items-center">
                      {IconComponent && <IconComponent className="mr-2" size={20} />}
                      {t(activity.translateKey)}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    {t(activity.descriptionKey)}
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

export default ActivitiesPage;