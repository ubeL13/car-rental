export type CarCategory = 'economy' | 'premium';

export interface Car {
  id: string;
  name: string;
  priceMin: number;
  priceMax: number;
  category: CarCategory;
}

export const cars: Car[] = [
  {
    id: '1',
    name: 'ELANTRA',
    priceMin: 12000,
    priceMax: 25000,
    category: 'premium',
  },
  {
    id: '2',
    name: 'i30 N',
    priceMin: 10000,
    priceMax: 32000,
    category: 'premium',
  },
  {
    id: '3',
    name: 'CRETA',
    priceMin: 8000,
    priceMax: 15000,
    category: 'economy',
  },
  {
    id: '4',
    name: 'SONATA',
    priceMin: 15000,
    priceMax: 35000,
    category: 'premium',
  },
  {
    id: '5',
    name: 'KIA Rio',
    priceMin: 7000,
    priceMax: 12000,
    category: 'economy',
  },
  {
    id: '6',
    name: 'Hyundai Solaris',
    priceMin: 6000,
    priceMax: 11000,
    category: 'economy',
  },
];
