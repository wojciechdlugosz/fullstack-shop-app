import styles from './Footer.module.scss';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import { FiMapPin } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footer__col}>
    <p className={styles.footer__col___header}>Wpadnij tutaj</p>
      <span className={styles.footer__col___icon}>
        <FaInstagram />
      </span>
      <span className={styles.footer__col___icon}>
        <FaFacebook />
      </span>
      <span className={styles.footer__col___icon}>
        <FaTiktok />
      </span>
    </div>
    <div className={styles.footer__col}>
    <p className={styles.footer__col___header}>Ważne sprawy</p>
      <ul className={styles.footer__col___list}>
        <li className={styles.footer__col___txt}>Wysyła i dostawa</li>
        <li className={styles.footer__col___txt}>Zwroty</li>
        <li className={styles.footer__col___txt}>Regulamin</li>
        <li className={styles.footer__col___txt}>Polityka prywatności</li>
      </ul>
    </div>
    <address className={styles.footer__col}>
      <p className={styles.footer__col___header}>Kontakt</p>
      <FaPhoneAlt /> +48 123 456 789
      <br />
      <MdAlternateEmail /> najlepszystyropian@example.pl
      <br />
      <FiMapPin /> ul. Styropianowa 1, 00-001 Styropianowo
    </address>
  </footer>
);

export default Footer;