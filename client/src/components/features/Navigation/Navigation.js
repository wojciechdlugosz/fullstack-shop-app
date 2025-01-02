import styles from './Navigation.module.scss';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navigation = () => {
  const [isNavShown, setIsNavShown] = useState(false);

  return (
    <>
      <nav
        className={`${
          isNavShown ? styles.navigation___responsive : styles.navigation
        }`}
      >
        <button
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
          <NavLink
            to="/category/fasada"
            className={({ isActive }) =>
              isActive
                ? styles.navigation__linkList__link___active
                : styles.navigation__linkList__link
            }
          >
            fasada
          </NavLink>
          <NavLink
            to="/category/podloga"
            className={({ isActive }) =>
              isActive
                ? styles.navigation__linkList__link___active
                : styles.navigation__linkList__link
            }
          >
            podłoga
          </NavLink>
          <NavLink
            to="/category/fundament"
            className={({ isActive }) =>
              isActive
                ? styles.navigation__linkList__link___active
                : styles.navigation__linkList__link
            }
          >
            fundament
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? styles.navigation__linkList__link___active
                : styles.navigation__linkList__link
            }
          >
            o nas
          </NavLink>
        </ul>
      </nav>
      <button
        className={styles.navigation__btn___show}
        onClick={() => setIsNavShown(true)}
      >
        <FaBars />
      </button>
    </>
  );
};

export default Navigation;