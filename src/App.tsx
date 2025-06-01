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
import { setLanguageDirection } from './i18n';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set initial language direction
    setLanguageDirection(i18n.language);
    
    // Update on language change
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
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;