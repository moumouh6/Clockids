import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BookingFormData } from '../types';
import { activities } from '../data/activities';

const BookingPage: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 1,
    activities: [],
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        activities: [...formData.activities, value]
      });
    } else {
      setFormData({
        ...formData,
        activities: formData.activities.filter(activity => activity !== value)
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Booking form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: 1,
        activities: [],
        message: ''
      });
      setSubmitted(false);
    }, 5000);
  };
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="section-title">{t('booking_title')}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('booking_subtitle')}
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
              <strong className="font-bold">Success! </strong>
              <span className="block sm:inline">{t('booking_success')}</span>
            </div>
          ) : null}
          
          <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                  {t('booking_name')} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                  {t('booking_email')} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">
                  {t('booking_phone')} *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="date">
                  {t('booking_date')} *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="time">
                  {t('booking_time')} *
                </label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">Select time</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="guests">
                  {t('booking_guests')} *
                </label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  min="1"
                  max="50"
                  value={formData.guests}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                {t('booking_activities')}
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {activities.map((activity) => (
                  <div key={activity.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`activity-${activity.id}`}
                      name="activities"
                      value={activity.id}
                      checked={formData.activities.includes(activity.id)}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 text-primary-500 rounded focus:ring-primary-500"
                    />
                    <label htmlFor={`activity-${activity.id}`} className="ml-2 text-gray-700">
                      {t(activity.translateKey)}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                {t('booking_message')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary px-8"
              >
                {t('booking_submit')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;