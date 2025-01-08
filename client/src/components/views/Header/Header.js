import Navigation from '../../features/Navigation/Navigation';
import styles from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { BsBagPlusFill } from 'react-icons/bs';
import { getAllCartProducts } from '../../../redux/cartRedux';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartProducts = useSelector(getAllCartProducts);
  return (
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
          <BsBagPlusFill />
          {cartProducts.length > 0 ? (
            <span className={styles.header__navbar__cartIcon___amount}>
              {cartProducts.length}
            </span>
          ) : (
            ''
          )}
        </NavLink>
      </div>
    </header>
  );
};

export default Header;