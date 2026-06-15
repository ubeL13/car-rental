import ArrowLeft from '@assets/icons/arrow-left.svg?react';
import ArrowRight from '@assets/icons/arrow-right.svg?react';
import classNames from 'classnames';

import styles from './slider-arrow.module.css';

interface SliderArrowProps {
  onClick: () => void;
  direction: 'left' | 'right';
}

const SliderArrow = ({ onClick, direction }: SliderArrowProps) => {
  const isLeft = direction === 'left';
  const isRight = direction === 'right';
  return (
    <button
      type="button"
      className={classNames(styles.arrow, {
        [styles.left]: isLeft,
        [styles.right]: isRight,
      })}
      onClick={onClick}>
      {isLeft ? (
        <ArrowLeft className={styles.icon} />
      ) : (
        <ArrowRight className={styles.icon} />
      )}
    </button>
  );
};

export default SliderArrow;
