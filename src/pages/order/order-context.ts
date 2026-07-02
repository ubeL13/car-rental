import type { Dispatch, SetStateAction } from 'react';

import { useOutletContext } from 'react-router-dom';

import type { CarCategory } from '@shared/config/cars';

export interface OrderState {
  cityId: string;
  pointId: string;
  modelId: string;
  category: CarCategory | 'all';
}
export interface OrderContextValue {
  order: OrderState;
  setOrder: Dispatch<SetStateAction<OrderState>>;
}
export const useOrderContext = () => useOutletContext<OrderContextValue>();
