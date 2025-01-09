import styles from './Cart.module.scss';
import {
  getAllCartProducts,
  removeCartProduct,
  addComment,
} from '../../../redux/cartRedux';
import { useSelector, useDispatch } from 'react-redux';
import { IMGS_URL } from '../../../config';
import Counter from './../../common/Counter/Counter';
import Button from '../../common/Button/Button';
import { useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartProducts = useSelector(getAllCartProducts);
  console.log(cartProducts);
  const [amounts, setAmounts] = useState(cartProducts.map(product => product.amount));
  const [comments, setComments] = useState({});
  console.log(comments);

  const handleDelete = (id) => {
    dispatch(removeCartProduct(id));
  };

  const handleCommentChange = (productId, comment) => {
    setComments((prevComments) => ({
      ...prevComments,
      [productId]: comment,
    }));
    dispatch(addComment({ id: productId, comment }))
  };

  const handleAmountChange = (index, amount) => {
    setAmounts(prevAmounts => {
      const newAmounts = [...prevAmounts];
      newAmounts[index] = amount;
      return newAmounts;
    });
  };

  return (
    <section className={styles.cart}>
      <h1 className={styles.cart__title}>koszyk</h1>
      {cartProducts.map((product, index) => (
        <div key={index} className={styles.cart__product}>
          <div className={styles.cart__product__imgWrapper}>
            <img
              className={styles.cart__product__imgWrapper___img}
              src={IMGS_URL + product.main_img}
              alt={product.name}
            />
          </div>
          <div className={styles.cart__product__detail}>
            Produkt:{' '}
            <span className={styles.cart__product__property}>
              {product.name}
            </span>
          </div>
          <div className={styles.cart__product__detail}>
            Cena:{' '}
            <span className={styles.cart__product__property}>
              {product.price} zł
            </span>
          </div>
          <div className={styles.cart__product__detail}>
            Ilość: <Counter number={product.amount} countProduct={(amount) => handleAmountChange(index, amount)} />
          </div>
          <div className={styles.cart__product__detail}>
            Kwota:{' '}
            <span className={styles.cart__product__property}>
              {product.price * amounts[index]} zł
            </span>
          </div>
          <div className={styles.cart__product__detail}>
            Komentarz:{' '}
            <input
              autoComplete="false"
              value={comments[product.id] || ''}
              onChange={(e) => handleCommentChange(product.id, e.target.value)}
            />
          </div>
          <div className={styles.cart__product__button}>
            <Button
              content={<FaRegTrashAlt />}
              onClick={() => handleDelete(product.id)}
            />
          </div>
        </div>
      ))}
      {cartProducts.length > 0 ? (
        <Button content="podsumowanie zamówienia" />
      ) : (
        <>
          <p>Koszyk jest pusty</p>
          <Button
            content={<IoMdArrowRoundBack />}
            onClick={() => navigate(-1)}
          />
        </>
      )}
    </section>
  );
};

export default Cart;