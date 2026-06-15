import classNames from 'classnames';

import Button from '../button';
import type { ButtonVariant } from '../button/button';

import SliderArrow from './slider-arrow';
import styles from './slider.module.css';

export interface SliderProps {
  slides: SlideData[];
  activeIndex: number;
  onSlideChange: (index: number) => void;
}

export interface SlideData {
  id: string;
  image: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonVariant: ButtonVariant;
}

const Slider = ({ slides, activeIndex, onSlideChange }: SliderProps) => {
  const handlePrev = () => {
    const newIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
    onSlideChange(newIndex);
  };

  const handleNext = () => {
    const newIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
    onSlideChange(newIndex);
  };

  const activeSlide = slides[activeIndex];

  return (
    <div className={styles.slider}>
      <img
        className={styles.image}
        src={activeSlide.image}
        alt={activeSlide.title}
      />
      <div className={styles.content}>
        <h2 className={styles.title}>{activeSlide.title}</h2>
        <p className={styles.description}>{activeSlide.description}</p>
        <Button
          label={activeSlide.buttonLabel}
          variant={activeSlide.buttonVariant}
          onClick={() => {}}
        />
      </div>

      <SliderArrow onClick={handlePrev} direction="left" />
      <SliderArrow onClick={handleNext} direction="right" />

      <div className={styles.dots}>
        {slides.map((slide, index) => (
          <button
            type="button"
            key={slide.id}
            className={classNames(styles.dot, {
              [styles.activeDot]: index === activeIndex,
            })}
            onClick={() => onSlideChange(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
