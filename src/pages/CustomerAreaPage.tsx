import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { User, Lock, CreditCard, History, Settings } from 'lucide-react';

const CustomerAreaPage: React.FC = () => {
  const { t } = useTranslation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add login logic here
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-800">Customer Login</h1>
              <p className="text-gray-600 mt-2">Access your account to manage your bookings and preferences</p>
            </div>

            <form onSubmit={handleLogin}>
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                  Email
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    id="email"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="password"
                    id="password"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between mb-6">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox text-primary-500" />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-sm text-primary-500 hover:text-primary-600">
                  Forgot password?
                </a>
              </div>

              <button type="submit" className="w-full btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl font-bold text-gray-800">My Account</h1>
              <button 
                onClick={() => setIsLoggedIn(false)}
                className="text-gray-600 hover:text-gray-800"
              >
                Logout
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <User className="text-primary-500 mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Profile Information</h3>
                    <p className="text-gray-600">Update your personal information and contact details</p>
                    <button className="mt-2 text-primary-500 hover:text-primary-600">
                      Edit Profile
                    </button>
                  </div>
                </div>

                <div className="flex items-start">
                  <CreditCard className="text-primary-500 mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Payment Methods</h3>
                    <p className="text-gray-600">Manage your payment methods and billing information</p>
                    <button className="mt-2 text-primary-500 hover:text-primary-600">
                      Manage Payments
                    </button>
                  </div>
                </div>

                <div className="flex items-start">
                  <History className="text-primary-500 mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Booking History</h3>
                    <p className="text-gray-600">View your past and upcoming bookings</p>
                    <button className="mt-2 text-primary-500 hover:text-primary-600">
                      View History
                    </button>
                  </div>
                </div>

                <div className="flex items-start">
                  <Settings className="text-primary-500 mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Account Settings</h3>
                    <p className="text-gray-600">Manage your account preferences and notifications</p>
                    <button className="mt-2 text-primary-500 hover:text-primary-600">
                      Update Settings
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="font-semibold text-gray-800">Pool Access Booking</p>
                    <p className="text-gray-600">Tomorrow at 14:00</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="font-semibold text-gray-800">Restaurant Order</p>
                    <p className="text-gray-600">Yesterday at 19:30</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="font-semibold text-gray-800">Game Package Purchase</p>
                    <p className="text-gray-600">3 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerAreaPage;