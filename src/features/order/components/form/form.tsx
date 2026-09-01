import { Button } from '@shared/ui-kit';

import FormCheckbox from './controls/form-checkbox';
import FormDatePicker from './controls/form-date-picker';
import FormRadioGroup from './controls/form-radio-group';
import styles from './form.module.css';
import { COLOR_OPTIONS, TARIFF_OPTIONS, useOrderForm } from './use-form';
import type { OrderFormValues } from './use-form';

const OrderForm = () => {
  const { control, handleSubmit, watch } = useOrderForm();
  const dateFrom = watch('dateFrom');

  const onSubmit = (values: OrderFormValues) => {
    console.log(values);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <fieldset className={styles.section}>
        <legend className={styles.legend}>Цвет</legend>
        <FormRadioGroup
          name="color"
          control={control}
          options={COLOR_OPTIONS}
          direction="row"
          rules={{ required: 'Выберите цвет' }}
        />
      </fieldset>

      <fieldset className={styles.section}>
        <legend className={styles.legend}>Дата аренды</legend>
        <FormDatePicker
          name="dateFrom"
          control={control}
          label="С"
          placeholder="Введите дату и время"
          minDate={new Date()}
          rules={{ required: 'Укажите дату начала' }}
        />
        <FormDatePicker
          name="dateTo"
          control={control}
          label="По"
          placeholder="Введите дату и время"
          minDate={dateFrom ?? new Date()}
          rules={{
            required: 'Укажите дату окончания',
            validate: (value) =>
              !dateFrom ||
              !value ||
              value > dateFrom ||
              'Дата окончания должна быть позже даты начала',
          }}
        />
      </fieldset>

      <fieldset className={styles.section}>
        <legend className={styles.legend}>Тариф</legend>
        <FormRadioGroup
          name="tariff"
          control={control}
          options={TARIFF_OPTIONS}
          rules={{ required: 'Выберите тариф' }}
        />
      </fieldset>

      <fieldset className={styles.section}>
        <legend className={styles.legend}>Доп услуги</legend>
        <FormCheckbox
          name="fullTank"
          control={control}
          label="Полный бак, 500р"
        />
        <FormCheckbox
          name="childSeat"
          control={control}
          label="Детское кресло, 200р"
        />
        <FormCheckbox
          name="rightHandDrive"
          control={control}
          label="Правый руль, 1600р"
        />
      </fieldset>

      <Button label="Проверить форму" size="medium" type="submit" />
    </form>
  );
};

export default OrderForm;
