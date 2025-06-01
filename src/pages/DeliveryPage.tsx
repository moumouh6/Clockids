import React from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Clock, MapPin } from 'lucide-react';

const DeliveryPage: React.FC = () => {
  const { t } = useTranslation();

  const menuItems = [
    {
      category: 'Pizza',
      items: [
        { name: 'Pizza au choix', price: 700, description: 'حسب الطلب من إختيارك' },
        { name: 'Mega Pizza', price: 1600, description: 'من اختيارك' }
      ]
    },
    {
      category: 'Plats',
      items: [
        { name: 'Fajitas au poulet gratiné', price: 450 },
        { name: 'Burger', price: 250 },
        { name: 'Barquette frite', price: 100, description: 'بطاطس مقلية' }
      ]
    },
    {
      category: 'Desserts & Boissons',
      items: [
        { name: 'Crêpe aux fruits', price: 450 },
        { name: 'Crêpe simple', price: 350 },
        { name: 'Jus naturel', price: 250 }
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="section-title">{t('delivery_service')}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('delivery_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-primary-600">Information de livraison</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="text-primary-500 mr-4 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Pour commander</h3>
                  <p className="text-gray-600">05 55 88 00 00</p>
                  <p className="text-gray-600">05 55 505 505</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-primary-500 mr-4 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Horaires de livraison</h3>
                  <p className="text-gray-600">12:00 - 00:00</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-primary-500 mr-4 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Frais de livraison</h3>
                  <p className="text-gray-600">Ain Benian: 100 DA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-primary-600">Promotion spéciale</h2>
            <div className="bg-accent-50 rounded-xl p-6 border-2 border-accent-500">
              <h3 className="text-xl font-bold mb-2">Mega Pizza</h3>
              <p className="text-gray-700 mb-4">من اختيارك</p>
              <p className="text-3xl font-bold text-primary-500">1600 DA</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-8 text-center text-primary-600">Notre Menu</h2>
          
          <div className="grid gap-8">
            {menuItems.map((category, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{category.category}</h3>
                <div className="grid gap-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-bold text-gray-800">{item.name}</h4>
                        {item.description && (
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        )}
                      </div>
                      <p className="font-bold text-primary-500">{item.price} DA</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;