import styles from './SideNavigation.module.scss';
import { getAllCategories } from '../../../redux/productsRedux';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const SideNavigation = () => {
  const categories = useSelector(getAllCategories);

  return (
    <nav className={styles.sideNav}>
      <NavLink
        to="/category/all"
        className={({ isActive }) =>
          isActive
            ? styles.sideNav__link___active
            : styles.sideNav__link
        }
      >
        wszystkie produkty
      </NavLink>
      {categories.map(({ name, text }) => (
        <NavLink
          key={name}
          to={`/category/${name}`}
          className={({ isActive }) =>
            isActive
              ? styles.sideNav__link___active
              : styles.sideNav__link
          }
        >
          {text}
        </NavLink>
      ))}
    </nav>
  );
};

export default SideNavigation;