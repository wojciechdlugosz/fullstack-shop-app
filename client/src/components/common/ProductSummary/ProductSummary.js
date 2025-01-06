import styles from './ProductSummary.module.scss';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { FaEye } from 'react-icons/fa';
import { BsBagHeartFill } from 'react-icons/bs';
import { IMGS_URL } from '../../../config';

const ProductSummary = ({ img, name, price }) => {
  const handleAddToCart = () => {
    //add to cart
  };

  const productName = name.split(' ').join('').toLowerCase();

  return (
    <div className={styles.productBox}>
      <Link
        to={`/product/${productName}`}
        className={styles.productBox__imgContainer}
      >
        <img
          className={styles.productBox__imgContainer__img}
          src={IMGS_URL + img}
          alt={name}
        />
      </Link>
      <div className={styles.productBox__description}>
        <h1 className={styles.productBox__description___title}>{name}</h1>
        <span className={styles.productBox__description___price}>
          {price} zł
        </span>
      </div>
      <div className={styles.productBox__buttons}>
        <Link to={`/product/${productName}`}>
          <Button content={<FaEye />} />
        </Link>
        <Button content={<BsBagHeartFill />} onClick={handleAddToCart} />
      </div>
    </div>
  );
};

export default ProductSummary;