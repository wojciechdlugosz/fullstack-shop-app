import { FaSpinner } from 'react-icons/fa';
import styles from './Spinner.module.scss';

const Spinner = () => (
  <div className={styles.spinner}>
    <FaSpinner className={styles.spinner__icon} />
  </div>
);

export default Spinner;