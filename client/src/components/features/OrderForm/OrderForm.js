import styles from './OrderForm.module.scss';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { getAllDeliveryForms } from '../../../redux/cartRedux';
import Button from '../../common/Button/Button';
import PropTypes from 'prop-types';

const OrderForm = ({ productsPrice }) => {
  const deliveryForms = useSelector(getAllDeliveryForms);
  const [selectedDelivery, setSelectedDelivery] = useState(
    deliveryForms[0].name,
  );
  const [deliveryPrice, setDeliveryPrice] = useState(deliveryForms[0].price);

  const handleDeliveryChange = (e) => {
    const selectedOption = e.target.value;
    setSelectedDelivery(selectedOption);
    const selectedPrice = deliveryForms.find(
      (form) => form.name === selectedOption,
    ).price;
    setDeliveryPrice(selectedPrice);
  };

  const totalPrice = productsPrice + deliveryPrice;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.delivery = selectedDelivery;
    data.price_products = productsPrice;
    data.price_total = totalPrice;
    console.log(data);
  };

  return (
    <div className={styles.orderForm}>
      <h2>Wysyłka</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.orderForm__form}
      >
        <div className={styles.orderForm__form___delivery}>
          {deliveryForms.map((delivery, index) => (
            <label
              key={index}
              className={styles.orderForm__form___delivery___input}
            >
              {delivery.name} - {delivery.price} zł
              <input
                type="radio"
                name="deliveryOption"
                value={delivery.name}
                price={delivery.price}
                checked={selectedDelivery === delivery.name}
                onChange={handleDeliveryChange}
              />
            </label>
          ))}
          <div>Razem: {totalPrice} zł</div>
        </div>
        <h2>Adres dostawy</h2>
        <div
          className={styles.orderForm__form___address}
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className={styles.orderForm__form___address___input}>
            Imię i nazwisko
            <input
              type="text"
              name="user_name"
              {...register('user_name', { required: true })}
            />
            {errors.user_name && <span>To pole jest wymagane</span>}
          </label>
          <label className={styles.orderForm__form___address___input}>
            Email
            <input
              type="email"
              name="user_email"
              {...register('user_email', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,}$/i,
              })}
            />
            {errors.user_email && errors.user_email.type === 'required' && (
              <span>To pole jest wymagane</span>
            )}
            {errors.user_email && errors.user_email.type === 'pattern' && (
              <span>Podaj poprawny adres email</span>
            )}{' '}
          </label>
          <label className={styles.orderForm__form___address___input}>
            Adres
            <input
              type="text"
              name="user_address"
              {...register('user_address', { required: true })}
            />
            {errors.user_address && <span>To pole jest wymagane</span>}
          </label>
        </div>
        <Button type="submit" content="zamawiam" />
      </form>
    </div>
  );
};

OrderForm.propTypes = {
  productsPrice: PropTypes.number.isRequired,
};

export default OrderForm;