import styles from './OrderSummary.module.scss';
import {
  getAllCartProducts,
  getComments,
  getAllProductsPrice,
} from '../../../redux/cartRedux';
import { useSelector } from 'react-redux';
import OrderForm from '../../features/OrderForm/OrderForm';
import { useEffect } from 'react';

const OrderSummary = () => {
  const orderProducts = useSelector(getAllCartProducts);
  const productComments = useSelector(getComments);
  const orderProductsPrice = useSelector(getAllProductsPrice);
  const orderProductsIds = orderProducts.map((product) => product.id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={styles.order}>
      <h1 className={styles.order__title}>podsumowanie zamówienia</h1>
      {orderProducts.map((product, index) => (
        <div key={index} className={styles.order__product}>
          <p className={styles.order__product___detail}>
            Produkt:{' '}
            <span className={styles.order__product___property}>
              {product.name}
            </span>
          </p>
          <p className={styles.order__product___detail}>
            Cena:{' '}
            <span className={styles.order__product___property}>
              {product.price} zł
            </span>
          </p>
          <p className={styles.order__product___detail}>
            Ilość:{' '}
            <span className={styles.order__product___property}>
              {product.amount}
            </span>
          </p>
          <p className={styles.order__product___detail}>
            Kwota:{' '}
            <span className={styles.order__product___property}>
              {product.price * product.amount} zł
            </span>
          </p>
          {product.comment ? (
            <p className={styles.order__product___comment}>
              Komentarz:{' '}
              <span className={styles.order__product___property}>
                {product.comment}
              </span>
            </p>
          ) : (
            ''
          )}
        </div>
      ))}
      <p className={styles.order__price}>
        Wartość produktów: {orderProductsPrice} zł
      </p>
      <OrderForm
        productsPrice={orderProductsPrice}
        comment={productComments}
        products={orderProductsIds}
      />
    </section>
  );
};

export default OrderSummary;