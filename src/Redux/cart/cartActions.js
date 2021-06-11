import { CartActionTypes } from './cartTypes';

export const addToCart = payload => ({
  type: CartActionTypes.ADD_TO_CART,
  payload,
});

export const removeFromCart = payload => ({
  type: CartActionTypes.REMOVE_FROM_CART,
  payload,
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});
