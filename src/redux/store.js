import { createStore, combineReducers,applyMiddleware  } from "redux";

import { userReducer } from "./user/userReducer";
import { gustReducer } from "./Gust/gustReducer";
import thunk from "redux-thunk";

import { cartReducer } from "./Cart/cartReducer";
import { orderReducer } from "./order/orderReducer";


const reducers = combineReducers({
  userDetailes: userReducer,
  gustState: gustReducer,
  cart: cartReducer,
  // order: orderReducer,
});

const userFromLocalStorage = JSON.parse(localStorage.getItem("user")) || {};
const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];
const shippingFromLocalStorage = JSON.parse(localStorage.getItem("shipping")) || [];

const initialState = {
  userDetailes: {
    user: userFromLocalStorage,
  },
  cart:{
    cart:cartFromLocalStorage,
    shippingAddress: shippingFromLocalStorage,
  }
 
};

const middlewares = [thunk];
const Store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middlewares));

export default Store;
