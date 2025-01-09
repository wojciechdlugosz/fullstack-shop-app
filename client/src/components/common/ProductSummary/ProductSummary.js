import styles from './ProductSummary.module.scss';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { FaEye } from 'react-icons/fa';
import { BsBagHeartFill } from 'react-icons/bs';
import { IMGS_URL } from '../../../config';
import { getAllCartProducts } from '../../../redux/cartRedux';
import { useSelector, useDispatch } from 'react-redux';
import { addToCartFunction } from '../../../utils/addToCartFunction';
import SideCartSummary from '../../features/SideCartSummary/SideCartSummary';
import { useState } from 'react';

const ProductSummary = ({ id, img, name, price }) => {
  const dispatch = useDispatch();
  const products = useSelector(getAllCartProducts);
  const [sideCartSummary, setSideCartSummary] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    const amount = 1;
    addToCartFunction(id, name, img, price, amount, products, dispatch);
    setSideCartSummary(true);
    setTimeout(() => {
      setSideCartSummary(false);
    }, 2500);
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
        <h2 className={styles.productBox__description___title}>{name}</h2>
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
      {sideCartSummary && <SideCartSummary />}
    </div>
  );
};

export default ProductSummary;