import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { cartItems } from './cart/cartReducer';

const reducers = combineReducers({
  cartItems,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
