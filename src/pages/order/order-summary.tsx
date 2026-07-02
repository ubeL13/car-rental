import { useLocation, useNavigate } from 'react-router-dom';

import { cars } from '@shared/config/cars';
import { cities } from '@shared/config/cities';
import { Button } from '@shared/ui-kit';

import type { OrderState } from './order-context';
import styles from './order-summary.module.css';

interface OrderSummaryProps {
  order: OrderState;
}
const steps = ['location', 'model', 'additionally', 'total'];
const formatPrice = (price: number) => price.toLocaleString('ru-RU');

const OrderSummary = ({ order }: OrderSummaryProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const currentStep = steps.find((s) => pathname.endsWith(s)) ?? 'location';
  const stepIndex = steps.indexOf(currentStep);
  const reached = (step: string) => steps.indexOf(step) <= stepIndex;

  const city = cities.find((c) => c.id === order.cityId);
  const point = city?.points.find((p) => p.id === order.pointId);
  const pointValue = city && point ? `${city.name}, ${point.address}` : null;

  const car = cars.find((c) => c.id === order.modelId);

  const carsInCategory =
    order.category === 'all'
      ? cars
      : cars.filter((c) => c.category === order.category);

  const overallMin = Math.min(...carsInCategory.map((c) => c.priceMin));
  const overallMax = Math.max(...carsInCategory.map((c) => c.priceMax));

  const priceValue = car
    ? `${formatPrice(car.priceMin)} - ${formatPrice(car.priceMax)} ₽`
    : `от ${formatPrice(overallMin)} до ${formatPrice(overallMax)} ₽`;

  return (
    <aside className={styles.summary}>
      <h2 className={styles.title}>Ваш заказ:</h2>

      <dl className={styles.list}>
        {reached('location') && pointValue && (
          <div className={styles.row}>
            <span className={styles.label}>Пункт выдачи</span>
            <span className={styles.leader} aria-hidden="true" />
            <span className={styles.value}>{pointValue}</span>
          </div>
        )}
        {reached('model') && car && (
          <div className={styles.row}>
            <span className={styles.label}>Модель</span>
            <span className={styles.leader} aria-hidden="true" />
            <span className={styles.value}>{car.name}</span>
          </div>
        )}
      </dl>

      <p className={styles.price}>
        <span className={styles.priceLabel}>Цена:</span> {priceValue}
      </p>

      <Button
        label={reached('model') && car ? 'Дополнительно' : 'Выбрать модель'}
        size="medium"
        state={pointValue ? 'default' : 'disabled'}
        onClick={() =>
          navigate(
            reached('model') && car ? '/order/additionally' : '/order/model'
          )
        }
      />
    </aside>
  );
};

export default OrderSummary;
