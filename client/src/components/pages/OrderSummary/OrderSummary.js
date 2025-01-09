import styles from './OrderSummary.module.scss';
import { getAllCartProducts } from '../../../redux/cartRedux';
import { useSelector } from 'react-redux';

const OrderSummary = () => {
  const orderProducts = useSelector(getAllCartProducts);

  return (
    <section className={styles.order}>
      <h1 className={styles.order__title}>podsumowanie zamówienia</h1>
      {orderProducts.map((product, index) => (
        <div key={index} className={styles.order__product}>
          <p>
            Produkt:{' '}
            <span className={styles.order__product___property}>
              {product.name}
            </span>
          </p>
          <p>
            Cena:{' '}
            <span className={styles.order__product___property}>
              {product.price} zł
            </span>
          </p>
          <p>
            Ilość:{' '}
            <span className={styles.order__product___property}>
              {product.amount}
            </span>
          </p>
          <p>
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
    </section>
  );
};

export default OrderSummary;