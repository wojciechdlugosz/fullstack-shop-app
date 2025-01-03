import styles from './ProductSummary.module.scss';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { FaEye } from 'react-icons/fa';
import { BsBagHeartFill } from 'react-icons/bs';

const ProductSummary = () => {
  const handleAddToCart = () => {
    //add to cart
  };

  return (
    <div className={styles.productBox}>
      <Link to="product" className={styles.productBox__imgContainer}>
        <img
          className={styles.productBox__imgContainer__img}
        />
      </Link>
      <div className={styles.productBox__description}>
        <h1 className={styles.productBox__description___title}>
        </h1>
        <span className={styles.productBox__description___price}> zł</span>
      </div>
      <div className={styles.productBox__buttons}>
        <Link to="product">
          <Button content={<FaEye />} />
        </Link>
        <Button content={<BsBagHeartFill />} onClick={handleAddToCart} />
      </div>
    </div>
  );
};

export default ProductSummary;