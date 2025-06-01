import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { pricingOptions } from '../data/pricing';

const PricingPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="section-title">{t('info_prices')}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect package for your family's adventure
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingOptions.map((option) => (
            <div 
              key={option.id} 
              className={`card p-6 flex flex-col h-full border-2 transition-transform duration-300 hover:transform hover:scale-105 ${
                option.popular 
                  ? 'border-primary-500 relative' 
                  : 'border-transparent'
              }`}
            >
              {option.popular && (
                <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase">
                  Most Popular
                </div>
              )}
              
              <h2 className="text-xl font-bold mb-2">{option.name}</h2>
              <div className="mb-6">
                <span className="text-3xl font-bold">{option.price}</span>
                <span className="text-gray-600 ml-1">{option.currency}</span>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {option.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="text-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/book" 
                className={`btn ${option.popular ? 'btn-primary' : 'btn-secondary'} w-full text-center`}
              >
                {t('book')}
              </Link>
            </div>
          ))}
        </div>
        
        {/* Promotions */}
        <div className="mt-16">
          <div className="bg-accent-50 border-2 border-accent-500 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Special Promotions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2">Group Discount</h3>
                <p className="text-gray-600 mb-4">Groups of 10 or more receive a 15% discount on all packages!</p>
                <p className="font-semibold text-primary-500">Book for your school, organization, or large family gathering.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2">Birthday Special</h3>
                <p className="text-gray-600 mb-4">Celebrate your birthday with us and the birthday person gets FREE entry!</p>
                <p className="font-semibold text-primary-500">Valid with minimum 5 paid guests and proof of birthday.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;