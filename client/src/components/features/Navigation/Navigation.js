import styles from './Navigation.module.scss';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { getAllCategories } from '../../../redux/productsRedux';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const [isNavShown, setIsNavShown] = useState(false);
  const categories = useSelector(getAllCategories);

  return (
    <>
      <nav
        className={`${
          isNavShown ? styles.navigation___responsive : styles.navigation
        }`}
      >
        <button
          type="button"
          className={styles.navigation__btn___hide}
          onClick={() => setIsNavShown(false)}
        >
          <FaTimes />
        </button>
        <ul
          onClick={() => setIsNavShown(false)}
          className={styles.navigation__linkList}
        >
          <NavLink
            to="/category/all"
            className={({ isActive }) =>
              isActive
                ? styles.navigation__linkList__link___active
                : styles.navigation__linkList__link
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
                  ? styles.navigation__linkList__link___active
                  : styles.navigation__linkList__link
              }
            >
              {text}
            </NavLink>
          ))}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? styles.navigation__linkList__link___active
                : styles.navigation__linkList__link
            }
          >
            o marce
          </NavLink>
        </ul>
      </nav>
      <button
        type="button"
        className={styles.navigation__btn___show}
        onClick={() => setIsNavShown(true)}
      >
        <FaBars />
      </button>
    </>
  );
};

export default Navigation;