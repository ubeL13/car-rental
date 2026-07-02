import { useOrderContext } from '@pages/order/order-context';
import { cars, type CarCategory } from '@shared/config/cars';

import styles from './model.module.css';

const Model = () => {
  const { order, setOrder } = useOrderContext();
  const filteredCars =
    order.category === 'all'
      ? cars
      : cars.filter((car) => car.category === order.category);
  const setCategory = (category: CarCategory | 'all') => {
    setOrder((prev) => ({ ...prev, modelId: '', category }));
  };
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
            checked={order.category === 'all'}
            onChange={() => setCategory('all')}
          />
          <span>Все модели</span>
        </label>
        <label className={styles.radioLabel}>
          <input
            type="radio"
            name="carFilter"
            checked={order.category === 'economy'}
            onChange={() => setCategory('economy')}
          />
          <span>Эконом</span>
        </label>
        <label className={styles.radioLabel}>
          <input
            type="radio"
            name="carFilter"
            checked={order.category === 'premium'}
            onChange={() => setCategory('premium')}
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
