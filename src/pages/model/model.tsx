import { useState } from 'react';

import { useOrderContext } from '@pages/order/order-context';

import styles from './model.module.css';

type Category = 'all' | 'economy' | 'premium';

interface Car {
  id: string;
  name: string;
  priceMin: number;
  priceMax: number;
  category: 'economy' | 'premium';
}

const mockCars: Car[] = [
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

const Model = () => {
  const { order, setOrder } = useOrderContext();
  const [filter, setFilter] = useState<Category>('all');

  const filteredCars =
    filter === 'all'
      ? mockCars
      : mockCars.filter((car) => car.category === filter);

  const handleSelectCar = (carId: string) => {
    setOrder((prev) => ({ ...prev, modelId: carId }));
  };

  return (
    <div className={styles.modelPage}>
      <div className={styles.filters}>
        <label className={styles.radioLabel}>
          <input
            type="radio"
            name="carFilter"
            checked={filter === 'all'}
            onChange={() => setFilter('all')}
          />
          <span>Все модели</span>
        </label>
        <label className={styles.radioLabel}>
          <input
            type="radio"
            name="carFilter"
            checked={filter === 'economy'}
            onChange={() => setFilter('economy')}
          />
          <span>Эконом</span>
        </label>
        <label className={styles.radioLabel}>
          <input
            type="radio"
            name="carFilter"
            checked={filter === 'premium'}
            onChange={() => setFilter('premium')}
          />
          <span>Премиум</span>
        </label>
      </div>

      <div className={styles.carsGrid}>
        {filteredCars.map((car) => (
          <div
            key={car.id}
            className={`${styles.carCard} ${
              order.modelId === car.id ? styles.selected : ''
            }`}
            onClick={() => handleSelectCar(car.id)}>
            <div className={styles.carInfo}>
              <h3 className={styles.carName}>{car.name}</h3>
              <p className={styles.carPrice}>
                {car.priceMin} - {car.priceMax} ₽
              </p>
            </div>
            <div className={styles.carImagePlaceholder}>
              <span>Фото {car.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Model;
