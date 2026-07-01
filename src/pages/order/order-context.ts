import type { Dispatch, SetStateAction } from 'react';

import { useOutletContext } from 'react-router-dom';

export interface OrderState {
  cityId: string;
  pointId: string;
  modelId: string;
}
export interface OrderContextValue {
  order: OrderState;
  setOrder: Dispatch<SetStateAction<OrderState>>;
}
export const useOrderContext = () => useOutletContext<OrderContextValue>();
