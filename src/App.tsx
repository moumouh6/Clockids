import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageLayout from './components/PageLayout';
import HomePage from './pages/HomePage';
import ActivitiesPage from './pages/ActivitiesPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';
import DeliveryPage from './pages/DeliveryPage';
import SchoolTripsPage from './pages/SchoolTripsPage';
import CustomerAreaPage from './pages/CustomerAreaPage';
import SpaPoolPage from './pages/SpaPoolPage';
import RamadanPage from './pages/RamadanPage';
import { setLanguageDirection } from './i18n';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    setLanguageDirection(i18n.language);
    
    const handleLanguageChange = () => {
      setLanguageDirection(i18n.language);
    };
    
    i18n.on('languageChanged', handleLanguageChange);
    
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/prices" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/delivery" element={<DeliveryPage />} />
          <Route path="/school-trips" element={<SchoolTripsPage />} />
          <Route path="/customer-area" element={<CustomerAreaPage />} />
          <Route path="/spa-pool" element={<SpaPoolPage />} />
          <Route path="/ramadan" element={<RamadanPage />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;