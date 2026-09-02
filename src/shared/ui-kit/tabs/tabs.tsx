import classNames from 'classnames';
import { Fragment } from 'react/jsx-runtime';

import styles from './tabs.module.css';

interface TabItem {
  id: string;
  label: string;
  disabled?: boolean;
}

interface TabsProps {
  items: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
}

const Tabs = ({ items, activeId, onChange, className }: TabsProps) => {
  const activeIndex = items.findIndex((item) => item.id === activeId);
  return (
    <div className={classNames(styles.tabs, className)} role="tablist">
      {items.map((item, index) => {
        const isActive = item.id === activeId;
        const isPassed = index < activeIndex;
        return (
          <Fragment key={item.id}>
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={classNames(styles.tab, {
                [styles.active]: isActive,
                [styles.passed]: isPassed,
                [styles.disabled]: item.disabled,
              })}
              disabled={item.disabled}
              onClick={() => onChange(item.id)}>
              {item.label}
            </button>
            {index < items.length - 1 && <span className={styles.triangle} />}
          </Fragment>
        );
      })}
    </div>
  );
};

export default Tabs;
export type { TabItem, TabsProps };
