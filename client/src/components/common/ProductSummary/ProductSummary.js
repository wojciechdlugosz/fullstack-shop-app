import styles from './ProductSummary.module.scss';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { FaEye } from 'react-icons/fa';
import { BsBagHeartFill } from 'react-icons/bs';
import { IMGS_URL } from '../../../config';
import { getAllCartProducts } from '../../../redux/cartRedux';
import { useSelector, useDispatch } from 'react-redux';
import { addToCartFunction } from '../../../utils/addToCartFunction';

const ProductSummary = ({ id, img, name, price }) => {
  const dispatch = useDispatch();
  const products = useSelector(getAllCartProducts);
  const handleAddToCart = (e) => {
    e.preventDefault();
    const amount = 1;
    addToCartFunction(id, name, img, price, amount, products, dispatch);
  };

  return (
    <div className={styles.productBox}>
      <Link to={`/product/${id}`} className={styles.productBox__imgContainer}>
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
        <Link to={`/product/${id}`}>
          <Button content={<FaEye />} />
        </Link>
        <Button content={<BsBagHeartFill />} onClick={handleAddToCart} />
      </div>
    </div>
  );
};

export default ProductSummary;