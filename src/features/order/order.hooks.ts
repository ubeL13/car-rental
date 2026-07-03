import { useOutletContext } from 'react-router-dom';

import type { OrderContextValue } from './order.types';

export const useOrderContext = () => useOutletContext<OrderContextValue>();
