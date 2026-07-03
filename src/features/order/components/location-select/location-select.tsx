import { cities } from '@shared/config/cities';
import { Autocomplete } from '@shared/ui-kit';

import { useOrderContext } from '../../order.hooks';

import styles from './location-select.module.css';

const LocationSelect = () => {
  const { order, setOrder } = useOrderContext();

  const selectedCity = cities.find((c) => c.id === order.cityId);

  const cityOptions = cities.map((c) => ({ id: c.id, label: c.name }));
  const pointOptions =
    selectedCity?.points.map((p) => ({ id: p.id, label: p.address })) ?? [];

  return (
    <div className={styles.location}>
      <Autocomplete
        label="Город"
        value={order.cityId}
        options={cityOptions}
        placeholder="Начните вводить город ..."
        onChange={(cityId) =>
          setOrder((prev) => ({ ...prev, cityId, pointId: '' }))
        }
      />
      <Autocomplete
        label="Пункт выдачи"
        value={order.pointId}
        options={pointOptions}
        placeholder="Начните вводить пункт ..."
        disabled={!order.cityId}
        onChange={(pointId) => setOrder((prev) => ({ ...prev, pointId }))}
      />

      <p className={styles.mapLabel}>Выбрать на карте:</p>
      <div className={styles.map}>Карта (заглушка)</div>
    </div>
  );
};

export default LocationSelect;
