import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'cafeteria',
    translateKey: 'service_cafeteria',
    descriptionKey: 'service_cafeteria_desc',
    icon: 'Coffee',
    image: 'https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'restaurant',
    translateKey: 'service_restaurant',
    descriptionKey: 'service_restaurant_desc',
    icon: 'UtensilsCrossed',
    image: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'quran',
    translateKey: 'service_quran',
    descriptionKey: 'service_quran_desc',
    icon: 'BookOpen',
    image: 'https://images.pexels.com/photos/46598/pexels-photo-46598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
];