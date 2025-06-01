import React from 'react';
import { useTranslation } from 'react-i18next';
import { Pool, Waves, Thermometer, Clock, Phone } from 'lucide-react';

const SpaPoolPage: React.FC = () => {
  const { t } = useTranslation();

  const schedules = {
    children: [
      {
        day: 'Samedi',
        times: [
          { group: 'Filles', time: '13:45 - 15:45' },
          { group: 'Garçons', time: '16:00 - 18:00' }
        ]
      },
      {
        day: 'Mardi',
        times: [
          { group: 'Filles', time: '13:45 - 15:45' },
          { group: 'Garçons', time: '16:00 - 18:00' }
        ]
      }
    ]
  };

  const prices = {
    swimming: [
      { title: '8 heures/mois', price: 5000, description: '1 fois par semaine' },
      { title: '16 heures/mois', price: 8000, description: '2 fois par semaine (PROMO)' },
      { title: '2 frères/sœurs', price: 8000, description: '8 heures/mois, 1 fois par semaine' }
    ],
    spa: [
      { title: 'Femmes', price: 1800 },
      { title: 'Enfants -10 ans', price: 1000 },
      { title: 'Parent + enfant -10 ans', price: 2000 },
      { title: 'Location complète', price: 25000, description: 'Groupes, familles, clubs sportifs' }
    ]
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="section-title">ClocKids SPA & Piscine</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            PISCINE, JACUZZI, HAMMAM, SAUNA A VAPEUR & SAUNA SEC
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-primary-600">Horaires d'ouverture</h2>
            <div className="flex items-center mb-4">
              <Clock className="text-primary-500 mr-4" size={24} />
              <p className="text-gray-700">12:00 - 00:00</p>
            </div>
            <p className="text-gray-600">Les horaires peuvent être modifiés</p>
            
            <div className="mt-6">
              <h3 className="font-bold text-lg mb-4">Réservations</h3>
              <div className="flex items-center space-x-4">
                <Phone className="text-primary-500" size={20} />
                <div>
                  <p>0555.50.00.00</p>
                  <p>0555.505.505</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-primary-600">Académie de Natation</h2>
            <div className="space-y-4">
              {schedules.children.map((day, index) => (
                <div key={index} className="border-b pb-4">
                  <h3 className="font-bold mb-2">{day.day}</h3>
                  {day.times.map((schedule, scheduleIndex) => (
                    <div key={scheduleIndex} className="flex justify-between items-center">
                      <span className="text-gray-700">{schedule.group}</span>
                      <span className="text-primary-500">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-primary-600">Tarifs Natation</h2>
            <div className="space-y-4">
              {prices.swimming.map((price, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold">{price.title}</h3>
                    <span className="text-primary-500 font-bold">{price.price} DA</span>
                  </div>
                  {price.description && (
                    <p className="text-gray-600 text-sm">{price.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-primary-600">Tarifs Spa & Bien-être</h2>
            <div className="space-y-4">
              {prices.spa.map((price, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold">{price.title}</h3>
                    <span className="text-primary-500 font-bold">{price.price} DA</span>
                  </div>
                  {price.description && (
                    <p className="text-gray-600 text-sm">{price.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaPoolPage;