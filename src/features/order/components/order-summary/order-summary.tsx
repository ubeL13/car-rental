import { Button } from '@shared/ui-kit';

import styles from './order-summary.module.css';

const OrderSummary = () => {
  return (
    <aside className={styles.summary}>
      <h2 className={styles.title}>Ваш заказ:</h2>
      <dl className={styles.list}>
        <div className={styles.row}>
          <dt className={styles.label}>Пункт выдачи</dt>
          <dd className={styles.value}>—</dd>
        </div>
      </dl>
      <p className={styles.price}>
        <span className={styles.priceLabel}>Цена:</span> —
      </p>
      <Button
        label="Выбрать модель"
        size="medium"
        state="disabled"
        onClick={() => {}}
      />
    </aside>
  );
};

export default OrderSummary;
