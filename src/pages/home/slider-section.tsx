import { useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { buildMenuItems, slides, socialLinks } from '@shared/config/menu';
import { BurgerMenu } from '@shared/ui-kit';
import Slider from '@shared/ui-kit/slider/slider';

import styles from './home.module.css';

interface SliderSectionProps {
  isMenuOpen: boolean;
  onCloseMenu: () => void;
  timeSwitch?: number;
}

const SliderSection = ({
  isMenuOpen,
  onCloseMenu,
  timeSwitch,
}: SliderSectionProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  // const initialIndex = slides.findIndex(
  //   (s) => s.id === location.state?.slideId
  // );

  const findIndex = (slideId?: string) => {
    const idx = slides.findIndex((s) => s.id === slideId);
    return idx >= 0 ? idx : 0;
  };

  const [activeIndex, setActiveIndex] = useState(
    findIndex(location.state?.slideId)
  );

  const [lastKey, setLastKey] = useState(location.key);

  if (location.key != lastKey) {
    setLastKey(location.key);
    const slideId = location.state?.slideId;
    if (slideId) setActiveIndex(findIndex(slideId));
  }
  const activeSlideId = slides[activeIndex]?.id;
  const menuItems = buildMenuItems(navigate, onCloseMenu, activeSlideId);

  return (
    <>
      <aside className={styles.media}>
        <Slider
          slides={slides}
          activeIndex={activeIndex}
          onSlideChange={setActiveIndex}
          timeSwitch={timeSwitch}
        />
      </aside>

      <BurgerMenu
        isOpen={isMenuOpen}
        onClose={onCloseMenu}
        items={menuItems}
        socialLinks={socialLinks}
      />
    </>
  );
};

export default SliderSection;
