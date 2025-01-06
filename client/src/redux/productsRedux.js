import { API_URL } from '../config';
import axios from 'axios';
import initialState from './initialState';

//selectors
export const getAllProducts = ({ products }) => products.data;
export const getRequests = ({ products }) => products.requests;
export const getProductById = ({ products }, productId) =>
  products.data.find((product) => product.id === productId);
export const getProductsByCategory = ({ products }, category) =>
  products.data.filter((product) => product.category === category);

// actions
const createActionName = (actionName) => `app/products/${actionName}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const DATA_PRODUCTS = createActionName('DATA_PRODUCTS');

// action creators
export const startRequest = (payload) => ({ payload, type: START_REQUEST });
export const endRequest = (payload) => ({ payload, type: END_REQUEST });
export const errorRequest = (payload) => ({ payload, type: ERROR_REQUEST });

export const getDataProducts = (payload) => ({ type: DATA_PRODUCTS, payload });

// thunks
export const fetchProducts = () => {
  return async (dispatch) => {
    const requestName = DATA_PRODUCTS;
    dispatch(startRequest({ name: requestName }));

    try {
      let res = await axios.get(`${API_URL}/api/products`);
      dispatch(getDataProducts(res.data));
      dispatch(endRequest({ name: requestName }));
    } catch (e) {
      dispatch(errorRequest({ name: requestName, error: e.message }));
    }
  };
};

const advertsReducer = (statePart = initialState, action = {}) => {
  switch (action.type) {
    case DATA_PRODUCTS:
      return { ...statePart, data: [...action.payload] };

    case START_REQUEST:
      return {
        ...statePart,
        requests: {
          ...statePart.requests,
          [action.payload.name]: { pending: true, error: null, success: false },
        },
      };
    case END_REQUEST:
      return {
        ...statePart,
        requests: {
          ...statePart.requests,
          [action.payload.name]: { pending: false, error: null, success: true },
        },
      };
    case ERROR_REQUEST:
      return {
        ...statePart,
        requests: {
          ...statePart.requests,
          [action.payload.name]: {
            pending: false,
            error: action.payload.error,
            success: false,
          },
        },
      };

    default:
      return statePart;
  }
};
export default advertsReducer;