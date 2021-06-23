import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { cartItems } from './cart/cartReducer';
import { user } from './user/userReducer';

const reducers = combineReducers({
  cartItems,
  user,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
