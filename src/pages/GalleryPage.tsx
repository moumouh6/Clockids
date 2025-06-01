import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { galleryItems } from '../data/gallery';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const GalleryPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="section-title">{t('gallery')}</h1>
        </div>
        
        {/* Featured Slider */}
        <div className="mb-12">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 5000 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            {galleryItems.slice(0, 4).map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative h-[70vh] max-h-[600px]">
                  <img 
                    src={item.image} 
                    alt={item.alt} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-8">
                      <h3 className="text-white text-2xl font-bold">
                        {item.alt}
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="rounded-xl overflow-hidden shadow-lg h-64 transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <img 
                src={item.image} 
                alt={item.alt} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;