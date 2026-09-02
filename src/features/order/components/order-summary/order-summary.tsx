import { useNavigate } from 'react-router-dom';

import { Button } from '@shared/ui-kit';
import { useFormContext } from 'react-hook-form';

import type { OrderState } from '../../order.types';
import type { OrderFormValues } from '../form/use-form';

import styles from './order-summary.module.css';

const STEP_BUTTONS: Record<string, { label: string; to?: string }> = {
  location: { label: 'Выбрать модель', to: '/order/model' },
  model: { label: 'Дополнительно', to: '/order/additionally' },
  additionally: { label: 'Итого', to: '/order/total' },
  total: { label: 'Заказать' },
};

interface OrderSummaryProps {
  step: string;
  order: OrderState;
}

const OrderSummary = ({ step, order }: OrderSummaryProps) => {
  const navigate = useNavigate();
  const { handleSubmit } = useFormContext<OrderFormValues>();

  const button = STEP_BUTTONS[step];

  const isDisabled =
    (step === 'location' && !order.pointId) ||
    (step === 'model' && !order.modelId);

  const handleClick = () => {
    const to = button?.to;

    if (!to) {
      return;
    }

    if (step === 'additionally') {
      handleSubmit(() => navigate(to))();
      return;
    }

    navigate(to);
  };

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
        label={button?.label ?? ''}
        size="medium"
        state={isDisabled ? 'disabled' : 'default'}
        onClick={handleClick}
      />
    </aside>
  );
};

export default OrderSummary;
