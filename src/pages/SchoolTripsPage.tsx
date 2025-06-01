import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Users, Bus, Book } from 'lucide-react';

const SchoolTripsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="section-title">School Trips</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Organize educational and fun trips for your school at Clockids Palace
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-primary-600">Trip Packages</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <Calendar className="text-primary-500 mr-4 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Half-Day Trip</h3>
                  <p className="text-gray-600">4 hours of activities including lunch</p>
                  <p className="font-semibold text-primary-500 mt-1">1500 DA per student</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Calendar className="text-primary-500 mr-4 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Full-Day Trip</h3>
                  <p className="text-gray-600">8 hours of activities including lunch and snacks</p>
                  <p className="font-semibold text-primary-500 mt-1">2500 DA per student</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-primary-600">What's Included</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <Bus className="text-primary-500 mr-4 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Transportation</h3>
                  <p className="text-gray-600">Safe and comfortable transportation from school and back</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Book className="text-primary-500 mr-4 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Educational Activities</h3>
                  <p className="text-gray-600">Structured learning activities and workshops</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Users className="text-primary-500 mr-4 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Supervision</h3>
                  <p className="text-gray-600">Professional supervisors and activity leaders</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-primary-600">Book a School Trip</h2>
          <form className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="schoolName">
                  School Name *
                </label>
                <input
                  type="text"
                  id="schoolName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="contactPerson">
                  Contact Person *
                </label>
                <input
                  type="text"
                  id="contactPerson"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="students">
                  Number of Students *
                </label>
                <input
                  type="number"
                  id="students"
                  min="10"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="preferredDate">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                Additional Information
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            
            <div className="text-center">
              <button type="submit" className="btn btn-primary px-8">
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SchoolTripsPage;