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
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.form__delivery}>
        <h2>Wysyłka</h2>
        {deliveryForms.map((delivery, index) => (
          <label key={index} className={styles.form__delivery___input}>
            {delivery.name} - {delivery.price} zł
            <input
              type="radio"
              name="deliveryOption"
              value={delivery.name}
              checked={selectedDelivery === delivery.name}
              onChange={handleDeliveryChange}
            />
          </label>
        ))}
        <p className={styles.form__delivery___price}>Razem: {totalPrice} zł</p>
      </div>
      <div className={styles.form__address}>
        <h2>Adres dostawy</h2>
        <label className={styles.form__address___input}>
          Imię i nazwisko
          <input
            type="text"
            name="user_name"
            {...register('user_name', { required: true, min: 3 })}
          />
          {errors.user_name && (
            <span>
              To pole jest wymagane i nie może mieć mniej niż 3 litery
            </span>
          )}
        </label>
        <label className={styles.form__address___input}>
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
        <label className={styles.form__address___input}>
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
  );
};

OrderForm.propTypes = {
  productsPrice: PropTypes.number.isRequired,
};

export default OrderForm;