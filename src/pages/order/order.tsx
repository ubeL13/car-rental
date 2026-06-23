import { useState } from 'react';

import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import Header from '@shared/components/header';
import Sidebar from '@shared/components/sidebar';
import Tabs from '@shared/ui-kit/tabs/tabs';
import type { TabItem } from '@shared/ui-kit/tabs/tabs';

import OrderSummary from './order-summary.tsx';
import styles from './order.module.css';

const items: TabItem[] = [
  { id: 'location', label: 'Местоположение' },
  { id: 'model', label: 'Модель' },
  { id: 'additionally', label: 'Дополнительно' },
  { id: 'total', label: 'Итого' },
];

const Order = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'RU' | 'ENG'>('RU');

  const activeId = items.find((i) => pathname.endsWith(i.id))?.id ?? 'location';

  return (
    <div className={styles.page}>
      <Sidebar
        onOpenMenu={() => setIsMenuOpen(true)}
        language={language}
        onToggleLanguage={() => setLanguage(language === 'RU' ? 'ENG' : 'RU')}
      />
      <div className={styles.content}>
        <Header />
        <Tabs
          items={items}
          activeId={activeId}
          onChange={(id) => navigate(`/order/${id}`)}
        />
        <div className={styles.body}>
          <main className={styles.main}>
            <Outlet />
          </main>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default Order;
