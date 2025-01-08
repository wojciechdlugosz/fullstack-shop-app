import { addToCart, addSameProduct } from '../redux/cartRedux';

export const addToCartFunction = (
  id,
  name,
  main_img,
  price,
  amount,
  products,
  dispatch,
) => {
  if (products.length === 0) {
    dispatch(addToCart({ id, name, main_img, price, amount }));
  } else if (products.some((product) => product.id === id)) {
    dispatch(addSameProduct({ id, amount }));
  } else {
    dispatch(addToCart({ id, name, main_img, price, amount }));
  }
};