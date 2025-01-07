import Button from '../Button/Button';
import styles from './Counter.module.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaMinus } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';

const Counter = (number) => {
  const [count, setCount] = useState(1 || number);

  const handleDecrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className={styles.counter}>
      <Button onClick={handleDecrement} content={<FaMinus />} />
      <input value={count} className={styles.counter__input} />
      <Button onClick={() => setCount(count + 1)} content={<FaPlus />} />
    </div>
  );
};

Counter.propTypes = {
  number: PropTypes.number,
};

export default Counter;