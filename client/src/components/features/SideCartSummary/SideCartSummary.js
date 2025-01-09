import styles from './SideCartSummary.module.scss';
import { getAllCartProducts } from '../../../redux/cartRedux';
import { useSelector } from 'react-redux';
import { IMGS_URL } from '../../../config';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const SideCartSummary = () => {
  const cartProducts = useSelector(getAllCartProducts);
  const productsList = useRef(null);

  useEffect(() => {
    productsList.current.lastElementChild.scrollIntoView();
  }, [cartProducts]);

  return (
    <aside>
      <Link className={styles.cartSummary} to={`/cart`}>
        <p className={styles.cartSummary__title}>koszyk</p>
        <div ref={productsList} className={styles.cartSummary__productsWrapper}>
          {cartProducts.map((product, index) => (
            <div
              key={index}
              className={styles.cartSummary__productsWrapper__product}
            >
              <img
                className={styles.cartSummary__productsWrapper__product___img}
                src={IMGS_URL + product.main_img}
                alt={product.name}
              />
              <div
                className={styles.cartSummary__productsWrapper__product___info}
              >
                <p>{product.name}</p>
                <p>
                  {product.amount} x {product.price} zł
                </p>
              </div>
            </div>
          ))}
        </div>
      </Link>
    </aside>
  );
};

export default SideCartSummary;