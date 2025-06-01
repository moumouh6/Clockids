export interface Activity {
  id: string;
  translateKey: string;
  descriptionKey: string;
  icon: string;
  image: string;
}

export interface Service {
  id: string;
  translateKey: string;
  descriptionKey: string;
  icon: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  type: 'image' | 'video';
  alt: string;
}

export interface PricingOption {
  id: string;
  name: string;
  price: number;
  currency: string;
  features: string[];
  popular?: boolean;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  activities: string[];
  message: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}