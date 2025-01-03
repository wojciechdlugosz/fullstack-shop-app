import { Link } from 'react-router-dom';
import styles from './RedirectBox.module.scss';
import PropTypes from 'prop-types';

const RedirectBox = ({ category, text, img }) => (
  <div className={styles.redirectBox}>
    <Link to={`category/${category}`}>
      <div className={styles.redirectBox__imgContainer}>
        <img
          className={styles.redirectBox__imgContainer__img}
          src={`${process.env.PUBLIC_URL}/images/${img}`}
          alt={text}
        />
      </div>
      <h1 className={styles.redirectBox__txt}>{text}</h1>
    </Link>
  </div>
);

RedirectBox.propTypes = {
  category: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default RedirectBox;