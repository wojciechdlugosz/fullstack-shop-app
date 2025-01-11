import { FaRegSmileBeam } from 'react-icons/fa';
import styles from './OrderSuccess.module.scss';

const OrderSuccess = () => (
  <section className={styles.info}>
    <p>
      Dzięki za przetestowanie mojej aplikacji! Dane zamówienia przesłane na
      serwer możesz zobaczyć w konsoli.
    </p>
    <div className={styles.info___icon}>
      <FaRegSmileBeam />
    </div>
  </section>
);

export default OrderSuccess;