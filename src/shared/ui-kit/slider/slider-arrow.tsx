import classNames from 'classnames';

import arrowLeft from '../../../assets/icons/arrow-left.svg';
import arrowRighht from '../../../assets/icons/arrow-right.svg';

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
      <img
        src={isLeft ? arrowLeft : arrowRighht}
        alt=""
        className={styles.icon}
      />
    </button>
  );
};

export default SliderArrow;
