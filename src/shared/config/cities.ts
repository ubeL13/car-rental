export interface PickupPoint {
  id: string;
  address: string;
}
export interface City {
  id: string;
  name: string;
  points: PickupPoint[];
}

export const cities: City[] = [
  {
    id: 'ulyanovsk',
    name: 'Ульяновск',
    points: [
      { id: 'narimanova', address: 'Нариманова, 42' },
      { id: 'goncharova', address: 'Гончарова, 21' },
      { id: 'kirova', address: 'Кирова, 6' },
    ],
  },
  {
    id: 'moscow',
    name: 'Москва',
    points: [
      { id: 'tverskaya', address: 'Тверская, 12' },
      { id: 'arbat', address: 'Арбат, 24' },
    ],
  },
  {
    id: 'spb',
    name: 'Санкт-Петербург',
    points: [
      { id: 'nevsky', address: 'Невский проспект, 28' },
      { id: 'ligovsky', address: 'Лиговский, 50' },
    ],
  },
  {
    id: 'kazan',
    name: 'Казань',
    points: [
      { id: 'baumana', address: 'Баумана, 7' },
      { id: 'kremlevskaya', address: 'Кремлёвская, 15' },
    ],
  },
];
