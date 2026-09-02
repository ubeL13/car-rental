import { useState } from 'react';

import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { OrderSummary, useOrderForm } from '@features/order';
import type { OrderState } from '@features/order';
import { cities } from '@shared/config/cities.ts';
import { buildMenuItems, socialLinks } from '@shared/config/menu';
import Header from '@shared/layout/header';
import Sidebar from '@shared/layout/sidebar';
import { BurgerMenu, Tabs } from '@shared/ui-kit';
import type { TabItem } from '@shared/ui-kit';
import { FormProvider } from 'react-hook-form';

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

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'RU' | 'ENG'>('RU');
  const [order, setOrder] = useState<OrderState>({
    cityId: 'ulyanovsk',
    pointId: '',
    modelId: '',
    category: 'all',
  });
  const methods = useOrderForm();

  const cityName = cities.find((c) => c.id === order.cityId)?.name;
  const activeId = items.find((i) => pathname.endsWith(i.id))?.id ?? 'location';
  const menuItems = buildMenuItems(navigate, () => setIsMenuOpen(false));
  return (
    <div className={styles.page}>
      <Sidebar
        onOpenMenu={() => setIsMenuOpen(true)}
        language={language}
        onToggleLanguage={() => setLanguage(language === 'RU' ? 'ENG' : 'RU')}
      />
      <div className={styles.content}>
        <Header city={cityName} />
        <Tabs
          items={items}
          activeId={activeId}
          onChange={(id) => navigate(`/order/${id}`)}
        />
        <FormProvider {...methods}>
          <div className={styles.body}>
            <main className={styles.main}>
              <Outlet context={{ order, setOrder }} />
            </main>
            <OrderSummary step={activeId} order={order} />
          </div>
        </FormProvider>
      </div>
      <BurgerMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        items={menuItems}
        socialLinks={socialLinks}
      />
    </div>
  );
};

export default Order;
