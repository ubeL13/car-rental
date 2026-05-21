import styles from './component.module.css';

interface ComponentProps {
  label: string;
  onClick?: () => void;
}

const Component = ({ label, onClick }: ComponentProps) => {
  return (
    <button className={styles.component} onClick={onClick}>
      {label}
    </button>
  );
};
export default Component;
