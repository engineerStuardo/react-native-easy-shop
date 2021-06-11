import { actions } from '../constants';

export const addToCart = payload => {
  return {
    type: actions.ADD_TO_CART,
    payload,
  };
};

export const removeFromCart = payload => {
  return {
    type: actions.REMOVE_FROM_CART,
    payload,
  };
};

export const clearCart = () => {
  return {
    type: actions.CLEAR_CART,
  };
};
