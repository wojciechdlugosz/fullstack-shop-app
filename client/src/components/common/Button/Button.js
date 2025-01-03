import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const Button = ({ content, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {content}
  </button>
);

Button.propTypes = {
  content: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;