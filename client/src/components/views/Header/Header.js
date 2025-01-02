import Navigation from '../../features/Navigation/Navigation';
import styles from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { BsBagHeartFill } from 'react-icons/bs';

const Header = () => (
  <header className={styles.header}>
    <Link to="/">
      <img
        className={styles.header__logo}
        src={`${process.env.PUBLIC_URL}/images/logo-najlepszystyropian.png`}
        alt="Najlepszy styropian logo"
      />
    </Link>
    <div className={styles.header__navbar}>
      <Navigation />
      <NavLink
        className={({ isActive }) =>
          isActive
            ? styles.header__navbar__cartIcon___active
            : styles.header__navbar__cartIcon
        }
        to="/cart"
      >
        <BsBagHeartFill />
      </NavLink>
    </div>
  </header>
);

export default Header;