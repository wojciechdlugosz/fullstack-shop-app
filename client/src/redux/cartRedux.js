import initialState from './initialState';

//selectors
export const getAllCartProducts = ({ cart }) => cart.products;
export const getAllDeliveryForms = ({ products }) => products.deliveryForms;
export const getComments = ({ cart }) =>
  cart.products
    .map((product) =>
      product.comment ? product.name + ': ' + product.comment : '',
    )
    .toString();

// actions
const createActionName = (actionName) => `app/cart/${actionName}`;

const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const ADD_SAME_PRODUCT = createActionName('ADD_SAME_PRODUCT');
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');
const ADD_COMMENT = createActionName('ADD_COMMENT');
const CHANGE_AMOUNT = createActionName('CHANGE_AMOUNT');

// action creators
export const addToCart = (payload) => ({ payload, type: ADD_PRODUCT });
export const addSameProduct = (payload) => ({
  payload,
  type: ADD_SAME_PRODUCT,
});
export const removeCartProduct = (payload) => ({
  payload,
  type: REMOVE_PRODUCT,
});
export const addComment = (payload) => ({ payload, type: ADD_COMMENT });
export const changeAmount = (payload) => ({ payload, type: CHANGE_AMOUNT });

const cartReducer = (statePart = initialState, action = {}) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...statePart,
        products: [...statePart.products, action.payload],
      };
    }
    case ADD_SAME_PRODUCT: {
      return {
        ...statePart,
        products: statePart.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, amount: product.amount + action.payload.amount }
            : product,
        ),
      };
    }
    case REMOVE_PRODUCT: {
      return {
        ...statePart,
        products: statePart.products.filter(
          (product) => product.id !== action.payload,
        ),
      };
    }
    case ADD_COMMENT: {
      return {
        ...statePart,
        products: statePart.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, comment: action.payload.comment }
            : product,
        ),
      };
    }
    case CHANGE_AMOUNT: {
      return {
        ...statePart,
        products: statePart.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, amount: action.payload.amount }
            : product,
        ),
      };
    }
    default:
      return statePart;
  }
};
export default cartReducer;