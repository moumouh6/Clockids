import { PricingOption } from '../types';

export const pricingOptions: PricingOption[] = [
  {
    id: 'standard',
    name: 'Standard Entry',
    price: 500,
    currency: 'DA',
    features: [
      'Access to all park areas',
      'Kids play areas',
      '2 games included',
      'Access to cafeteria',
      'Valid for one day'
    ]
  },
  {
    id: 'premium',
    name: 'Premium Package',
    price: 1000,
    currency: 'DA',
    features: [
      'Access to all park areas',
      '12 games included',
      'One karting session',
      'Access to cafeteria and restaurant',
      'Valid for one day'
    ],
    popular: true
  },
  {
    id: 'family',
    name: 'Family Pack (4 persons)',
    price: 1800,
    currency: 'DA',
    features: [
      'Access to all park areas for 4 people',
      '5 games per person',
      'One karting session per person',
      'Family meal voucher',
      'Valid for one day'
    ]
  },
  {
    id: 'spa',
    name: 'Spa & Wellness',
    price: 2000,
    currency: 'DA',
    features: [
      'Full day park access',
      'Spa access',
      'Sauna session',
      'Traditional hammam',
      'Light refreshments included'
    ]
  }
];