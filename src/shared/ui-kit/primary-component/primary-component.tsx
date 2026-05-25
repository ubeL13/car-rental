import styles from './primary-component.module.css';

interface PrimaryComponentProps {
  label: string;
  onClick?: () => void;
}

const PrimaryComponent = ({ label, onClick }: PrimaryComponentProps) => {
  return (
    <button className={styles.primaryComponent} onClick={onClick}>
      {label}
    </button>
  );
};
export default PrimaryComponent;
