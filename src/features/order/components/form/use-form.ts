import { useForm } from 'react-hook-form';

export interface OrderFormValues {
  color: string;
  dateFrom: Date | null;
  dateTo: Date | null;
  tariff: string;
  fullTank: boolean;
  childSeat: boolean;
  rightHandDrive: boolean;
}

export const COLOR_OPTIONS = [
  { value: 'Любой', label: 'Любой' },
  { value: 'Красный', label: 'Красный' },
  { value: 'Голубой', label: 'Голубой' },
];

export const TARIFF_OPTIONS = [
  { value: 'minute', label: 'Поминутно, 7₽/мин' },
  { value: 'day', label: 'На сутки, 1999 ₽/сутки' },
];

export const useOrderForm = () =>
  useForm<OrderFormValues>({
    mode: 'onTouched',
    defaultValues: {
      color: '',
      dateFrom: null,
      dateTo: null,
      tariff: '',
      fullTank: false,
      childSeat: false,
      rightHandDrive: false,
    },
  });
