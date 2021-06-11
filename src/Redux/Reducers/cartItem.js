import { actions } from '../constants';

export const cartItems = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_TO_CART:
      return [...state, action.payload];
    case actions.REMOVE_FROM_CART:
      return state.filter(item => item !== action.payload);
    case actions.CLEAR_CART:
      return [];
  }
  return state;
};
