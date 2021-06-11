import { CartActionTypes } from './cartTypes';

export const addToCart = payload => {
  return {
    type: CartActionTypes.ADD_TO_CART,
    payload,
  };
};

export const removeFromCart = payload => {
  return {
    type: CartActionTypes.REMOVE_FROM_CART,
    payload,
  };
};

export const clearCart = () => {
  return {
    type: CartActionTypes.CLEAR_CART,
  };
};
