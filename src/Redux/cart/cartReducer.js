import { CartActionTypes } from './cartTypes';

export const cartItems = (state = [], action) => {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART:
      return [...state, action.payload];
    case CartActionTypes.REMOVE_FROM_CART:
      return state.filter(item => item !== action.payload);
    case CartActionTypes.CLEAR_CART:
      return [];
  }
  return state;
};
